// // hooks/useAgora.js
// import { useEffect, useState } from 'react';
// import AgoraRTC from 'agora-rtc-sdk-ng';

// const useAgora = (appId, token, channel) => {
//   const [client, setClient] = useState(null);
//   const [localVideoTrack, setLocalVideoTrack] = useState(null);
//   const [remoteUsers, setRemoteUsers] = useState([]);

//   useEffect(() => {
//     const initClient = async () => {
//       const rtcClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
//       setClient(rtcClient);

//       await rtcClient.join(appId, channel, token, null);
//       const videoTrack = await AgoraRTC.createCameraVideoTrack();
//       rtcClient.publish([videoTrack]);

//       setLocalVideoTrack(videoTrack);

//       rtcClient.on('user-published', async (user, mediaType) => {
//         await rtcClient.subscribe(user, mediaType);
//         if (mediaType === 'video') {
//           setRemoteUsers(prevUsers => [...prevUsers, user]);
//         }
//       });

//       rtcClient.on('user-unpublished', (user) => {
//         setRemoteUsers(prevUsers => prevUsers.filter(u => u.uid !== user.uid));
//       });
//     };

//     initClient();

//     return () => {
//       localVideoTrack && localVideoTrack.close();
//       client && client.leave();
//     };
//   }, [appId, token, channel]);

//   return { localVideoTrack, remoteUsers };
// };

// export default useAgora;
import React from 'react'

const useAgora = () => {
  return (
    <div>useAgora</div>
  )
}

export default useAgora