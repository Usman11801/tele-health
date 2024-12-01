// components/VideoCall.js
import React, { useEffect, useRef, useState } from 'react';

const VideoCall = ({ channel, role }) => {
  const [client, setClient] = useState(null);
  const [localTracks, setLocalTracks] = useState({ audioTrack: null, videoTrack: null });
  const [token, setToken] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Fetch the RTC token from the backend
    // const fetchToken = async () => {
    //   const response = await fetch(`http://localhost:5000/rtc/${channel}/publisher/uid`);
    //   const data = await response.json();
    //   setToken(data.rtcToken);
    // };

    // fetchToken();
    setToken(process.env.NEXT_PUBLIC_AGORA_APP_ID);

  }, [channel]);

  useEffect(() => {
    if (token) {
      const initAgora = async () => {
        const { IAgoraRTCClient, createClient, createMicrophoneAndCameraTracks } = await import('agora-rtc-sdk-ng');

        const agoraClient = createClient({ mode: 'rtc', codec: 'vp8' });

        agoraClient.on('user-published', async (user, mediaType) => {
          await agoraClient.subscribe(user, mediaType);
          if (mediaType === 'video') {
            const remoteVideoTrack = user.videoTrack;
            remoteVideoTrack.play(videoRef.current);
          }
        });

        agoraClient.on('user-unpublished', (user) => {
          // Handle user unpublished
        });

        await agoraClient.join(process.env.NEXT_PUBLIC_AGORA_APP_ID, channel, process.env.NEXT_PUBLIC_AGORA_TEMP_TOKEN, null);

        const [microphoneTrack, cameraTrack] = await createMicrophoneAndCameraTracks();
        setLocalTracks({ audioTrack: microphoneTrack, videoTrack: cameraTrack });

        await agoraClient.publish([microphoneTrack, cameraTrack]);
        cameraTrack.play(videoRef.current);

        setClient(agoraClient);
      };

      initAgora();
    }
  }, [token]);

  useEffect(() => {
    return () => {
      if (client) {
        client.leave();
        localTracks.audioTrack && localTracks.audioTrack.close();
        localTracks.videoTrack && localTracks.videoTrack.close();
      }
    };
  }, [client, localTracks]);

  return <div ref={videoRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default VideoCall;
