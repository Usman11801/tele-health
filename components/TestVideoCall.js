import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSlash, faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import MessageSection from './MessageSections';

const appID = process.env.NEXT_PUBLIC_AGORA_APP_ID;
const uid = Math.floor(Math.random() * 1000); // Assign a unique uid for each user

const initializeAgoraClient = async () => {
  if (typeof window !== 'undefined') {
    const AgoraRTC = (await import('agora-rtc-sdk-ng')).default;
    const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    return client;
  }
  return null;
};

const TestVideoCall = () => {
  const localPlayerRef = useRef(null);
  const [agoraClient, setAgoraClient] = useState(null);
  const [localTracks, setLocalTracks] = useState({ audioTrack: null, videoTrack: null });
  const [rtcTokens, setRtcTokens] = useState();
  const [channelName, setchannelName] = useState();
  const [info, setInfo] = useState(false);



  const [remoteUsers, setRemoteUsers] = useState({});
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoStopped, setIsVideoStopped] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const [patientInfo, setPatientInfo] = useState(null); 
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [secondUseEffect, setSecondUseEffect] = useState(false);


  const rtcToken=async (appointmentIds)=>{
    console.log("appointmentId>>Start1>>>",appointmentIds);
    try {
      const token = localStorage.getItem("docToken");
    console.log("appointmentId>>Start2>>>",appointmentIds);


      const response = await fetch(`${baseUrl}/joinRoom?appointmentId=${appointmentIds}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("response data is>>>>>>>>>>>", data.rtcToken, data.channelName); 
      console.log(">>>>>>>>>data.rtcToken>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>,",data.rtcToken);
      setRtcTokens(data?.rtcToken)
      setchannelName(data?.channelName)
      // setInfo(data.info)
      setPatientInfo(data.info)
      console.log("data.info>>>>>>>>>>>>>",data.info,"=========",patientInfo);
      return { rtcToken: data.rtcToken, channelName: data.channelName }; 
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  // console.log("patientInfo>>>>>>",patientInfo);
// useEffect(()=>{
//   rtcToken()
// })

useEffect(() => {
  const queryParams = new URLSearchParams(window.location.search);
  const appointmentIds = queryParams.get('appointment');
  const info = queryParams.get('info');
  setInfo(info)
  const fetchTokenAndInitialize = async () => {
  

    console.log("appointmentId>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1>>>>>", appointmentIds);

    const rtcdata = await rtcToken(appointmentIds); // Await the resolution of rtcToken
    console.log("rtcdata>>>>>>>", rtcdata);

    if (rtcdata) {
      const init = async () => {
        console.log("channelName????>>", rtcdata.channelName);
        const client = await initializeAgoraClient();
        if (client) {
          setAgoraClient(client);
          try {
            await client.join(appID, rtcdata.channelName, rtcdata.rtcToken, uid);

            const AgoraRTC = (await import('agora-rtc-sdk-ng')).default;
            const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
            setLocalTracks({ audioTrack: microphoneTrack, videoTrack: cameraTrack });

            cameraTrack.play(localPlayerRef.current);
            visualizeAudio(microphoneTrack);

            await client.publish([microphoneTrack, cameraTrack]);
            console.log('Published local stream successfully');

            client.on('user-published', async (user, mediaType) => {
              await client.subscribe(user, mediaType);
              console.log(`Subscribed to user: ${user.uid}, mediaType: ${mediaType}`);
              if (mediaType === 'video') {
                setRemoteUsers((prevUsers) => ({ ...prevUsers, [user.uid]: user }));
              }
              if (mediaType === 'audio') {
                user.audioTrack.play();
              }
            });

            client.on('user-unpublished', (user, mediaType) => {
              console.log(`Unpublished user: ${user.uid}, mediaType: ${mediaType}`);
              setRemoteUsers((prevUsers) => {
                const newUsers = { ...prevUsers };
                delete newUsers[user.uid];
                return newUsers;
              });
            });

          } catch (err) {
            console.log('Failed to join the channel:', err);
          }
        }
      };

      init();
    }
  };

  fetchTokenAndInitialize(); // Call the async function
  return () => {
    if (localTracks.audioTrack) localTracks.audioTrack.stop();
    if (localTracks.videoTrack) localTracks.videoTrack.stop();
    if (agoraClient) agoraClient.leave();
    if (audioContextRef.current) audioContextRef.current.close();
  };
}, []);
 // Include any necessary dependencies

  

  useEffect(() => {
    Object.keys(remoteUsers).forEach((uid) => {
      const user = remoteUsers[uid];
      if (user.videoTrack) {
        user.videoTrack.play(`remote-player-${uid}`);
      }
    });

    return () => {
      Object.keys(remoteUsers).forEach((uid) => {
        const user = remoteUsers[uid];
        if (user.videoTrack) {
          user.videoTrack.stop();
        }
      });
    };
  }, [remoteUsers]);

  const visualizeAudio = (audioTrack) => {
    if (analyserRef.current) {
      analyserRef.current.disconnect();
    }
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    analyserRef.current = analyser;
    audioContextRef.current = audioContext;

    const source = audioContext.createMediaStreamSource(new MediaStream([audioTrack.getMediaStreamTrack()]));
    source.connect(analyser);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const calculateAudioLevel = () => {
      if (!analyserRef.current) return;
      requestAnimationFrame(calculateAudioLevel);
      analyser.getByteTimeDomainData(dataArray);

      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i] - 128;
        sum += value * value;
      }
      const rms = Math.sqrt(sum / bufferLength);
      setAudioLevel(rms);
    };

    calculateAudioLevel();
  };

  const handleEndCall = async () => {
    if (localTracks.audioTrack) localTracks.audioTrack.stop();
    if (localTracks.videoTrack) localTracks.videoTrack.stop();
    if (agoraClient) await agoraClient.leave();
    setLocalTracks({ audioTrack: null, videoTrack: null });
    setAgoraClient(null);
    analyserRef.current = null;
    if (audioContextRef.current) audioContextRef.current.close();
  };

  const handleMicToggle = () => {
    if (localTracks.audioTrack) {
      if (isMicMuted) {
        localTracks.audioTrack.setEnabled(true);
        visualizeAudio(localTracks.audioTrack);  // Reinitialize visualization when unmuting
      } else {
        localTracks.audioTrack.setEnabled(false);
        if (analyserRef.current) analyserRef.current.disconnect(); // Stop visualization when muting
      }
      setIsMicMuted(!isMicMuted);
    }
  };

  const handleVideoToggle = () => {
    if (localTracks.videoTrack) {
      if (isVideoStopped) {
        localTracks.videoTrack.setEnabled(true);
      } else {
        localTracks.videoTrack.setEnabled(false);
      }
      setIsVideoStopped(!isVideoStopped);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#202124', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '90%', height: '70vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden',  }}>
          <div style={{ position: 'relative', width: '48%', height: '100%', border: '6px solid #202124', borderRadius: '10px', backgroundColor: 'black' }}>
            <div ref={localPlayerRef} style={{ width: '100%', height: '100%' }} id="local-player"></div>
            {!isMicMuted && (
              <FontAwesomeIcon
                icon={faVolumeUp}
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  fontSize: `${10 + audioLevel * 2}px`,
                  color: 'white',
                  transition: 'font-size 0.1s ease',
                }}
              />
            )}
            {isMicMuted && <FontAwesomeIcon icon={faMicrophoneSlash} style={{ position: 'absolute', top: '10px', left: '10px', color: 'red' }} />}
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white' }}>You</div>
          </div>
          <div style={{ width: '48%', height: '100%', border: '6px solid #202124', borderRadius: '10px', backgroundColor: 'black', display: 'flex', flexWrap: 'wrap' }}>
            {Object.keys(remoteUsers).map((uid) => (
              <div key={uid} style={{ width: '100%', height: '100%', position: 'relative' }}>
                <div id={`remote-player-${uid}`} style={{ width: '100%', height: '100%' }}></div>
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white' }}>User {uid}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '20px' }}>
          <FontAwesomeIcon icon={isMicMuted ? faMicrophoneSlash : faMicrophone} size="2x" onClick={handleMicToggle} style={{ cursor: 'pointer', color: isMicMuted ? 'red' : 'white' }} />
          <FontAwesomeIcon icon={isVideoStopped ? faVideoSlash : faVideo} size="2x" onClick={handleVideoToggle} style={{ cursor: 'pointer', color: isVideoStopped ? 'red' : 'white' }} />
          <FontAwesomeIcon icon={faPhoneSlash} size="2x" onClick={handleEndCall} style={{ cursor: 'pointer', color: 'red' }} />

        </div>
        
      </div>
      


{console.log("check Before========",info)}
      {info=='true'? 
        <div>
          <MessageSection />
        </div>:""
      }
    </div>
  );
};

export default TestVideoCall;
