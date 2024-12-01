import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSlash, faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash, faDesktop, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const appID = process.env.NEXT_PUBLIC_AGORA_APP_ID;
const uid = 10;

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
  const [remoteUsers, setRemoteUsers] = useState({});
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoStopped, setIsVideoStopped] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const screenTrackRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const rtctoken = queryParams.get('rtctoken');
    const channelName = queryParams.get('channelName');

    console.log('rtctoken:', rtctoken);
    console.log('channelName:', channelName);

    const init = async () => {
      const client = await initializeAgoraClient();
      if (client) {
        setAgoraClient(client);
        try {
          await client.join(appID, channelName, rtctoken, uid);

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

    return () => {
      if (localTracks.audioTrack) localTracks.audioTrack.stop();
      if (localTracks.videoTrack) localTracks.videoTrack.stop();
      if (agoraClient) agoraClient.leave();
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  useEffect(() => {
    Object.keys(remoteUsers).forEach((uid) => {
      const user = remoteUsers[uid];
      if (user.videoTrack) {
        user.videoTrack.play(`remote-player-${uid}`);
      }
    });
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

  const handleScreenShareToggle = async () => {
    if (!isScreenSharing) {
      const AgoraRTC = (await import('agora-rtc-sdk-ng')).default;
      screenTrackRef.current = await AgoraRTC.createScreenVideoTrack();
      await agoraClient.unpublish(localTracks.videoTrack);
      await agoraClient.publish(screenTrackRef.current);
      screenTrackRef.current.play(localPlayerRef.current);
    } else {
      await agoraClient.unpublish(screenTrackRef.current);
      await agoraClient.publish(localTracks.videoTrack);
      localTracks.videoTrack.play(localPlayerRef.current);
      screenTrackRef.current.stop();
    }
    setIsScreenSharing(!isScreenSharing);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#202124' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '90%', height: '70vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#303134' }}>
        <div style={{ width: '48%', height: '100%', border: '6px solid #202124', borderRadius: '10px', backgroundColor: 'black', display: 'flex', flexWrap: 'wrap' }}>
          {Object.keys(remoteUsers).map((uid) => (
            <div key={uid} style={{ width: '100%', height: '100%', position: 'relative' }} id={`remote-player-${uid}`}>
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white' }}>User {uid}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', width: isScreenSharing ? '100%' : '48%', height: '100%', border: '6px solid #202124', borderRadius: '10px', backgroundColor: 'black' }}>
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
      </div>
      <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '20px' }}>
        <FontAwesomeIcon icon={isMicMuted ? faMicrophoneSlash : faMicrophone} size="2x" onClick={handleMicToggle} style={{ cursor: 'pointer', color: isMicMuted ? 'red' : 'white' }} />
        <FontAwesomeIcon icon={isVideoStopped ? faVideoSlash : faVideo} size="2x" onClick={handleVideoToggle} style={{ cursor: 'pointer', color: isVideoStopped ? 'red' : 'white' }} />
        <FontAwesomeIcon icon={faPhoneSlash} size="2x" onClick={handleEndCall} style={{ cursor: 'pointer', color: 'red' }} />
        {/* <FontAwesomeIcon icon={faDesktop} size="2x" onClick={handleScreenShareToggle} style={{ cursor: 'pointer', color: isScreenSharing ? 'green' : 'white' }} /> */}
      </div>
    </div>
  );
};

export default TestVideoCall;
