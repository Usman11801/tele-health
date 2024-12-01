import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';

// Dynamically import Agora components
const LocalUser = dynamic(() => import("agora-rtc-react").then(mod => mod.LocalUser), { ssr: false });
const RemoteUser = dynamic(() => import("agora-rtc-react").then(mod => mod.RemoteUser), { ssr: false });
const useIsConnected = dynamic(() => import("agora-rtc-react").then(mod => mod.useIsConnected), { ssr: false });
const useJoin = dynamic(() => import("agora-rtc-react").then(mod => mod.useJoin), { ssr: false });
const useLocalMicrophoneTrack = dynamic(() => import("agora-rtc-react").then(mod => mod.useLocalMicrophoneTrack), { ssr: false });
const useLocalCameraTrack = dynamic(() => import("agora-rtc-react").then(mod => mod.useLocalCameraTrack), { ssr: false });
const usePublish = dynamic(() => import("agora-rtc-react").then(mod => mod.usePublish), { ssr: false });
const useRemoteUsers = dynamic(() => import("agora-rtc-react").then(mod => mod.useRemoteUsers), { ssr: false });

const Basics = () => {
  const [calling, setCalling] = useState(false);
  const isConnected = useIsConnected(); 
  const [appId, setAppId] = useState("");
  const [channel, setChannel] = useState("");
  const [token, setToken] = useState("");

  // Use useEffect to run code only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      useJoin({ appid: appId, channel: channel, token: token ? token : null }, calling);
    }
  }, [appId, channel, token, calling]);

  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);
  usePublish([localMicrophoneTrack, localCameraTrack]);

  const remoteUsers = useRemoteUsers();

  return (
    <>
      <div className="room">
        {isConnected ? (
          <div className="user-list">
            <div className="user">
              <LocalUser
                audioTrack={localMicrophoneTrack}
                cameraOn={cameraOn}
                micOn={micOn}
                videoTrack={localCameraTrack}
                cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
              >
                <samp className="user-name">You</samp>
              </LocalUser>
            </div>
            {remoteUsers.map((user) => (
              <div className="user" key={user.uid}>
                <RemoteUser cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg" user={user}>
                  <samp className="user-name">{user.uid}</samp>
                </RemoteUser>
              </div>
            ))}
          </div>
        ) : (
          <div className="join-room">
            <input
              onChange={e => setAppId(e.target.value)}
              placeholder="<Your app ID>"
              value={appId}
            />
            <input
              onChange={e => setChannel(e.target.value)}
              placeholder="<Your channel Name>"
              value={channel}
            />
            <input
              onChange={e => setToken(e.target.value)}
              placeholder="<Your token>"
              value={token}
            />
            <button
              className={`join-channel ${!appId || !channel ? "disabled" : ""}`}
              disabled={!appId || !channel}
              onClick={() => setCalling(true)}
            >
              <span>Join Channel</span>
            </button>
          </div>
        )}
      </div>
      {isConnected && (
        <div className="control">
          <div className="left-control">
            <button className="btn" onClick={() => setMic(a => !a)}>
              <i className={`i-microphone ${!micOn ? "off" : ""}`} />
            </button>
            <button className="btn" onClick={() => setCamera(a => !a)}>
              <i className={`i-camera ${!cameraOn ? "off" : ""}`} />
            </button>
          </div>
          <button
            className={`btn btn-phone ${calling ? "btn-phone-active" : ""}`}
            onClick={() => setCalling(a => !a)}
          >
            {calling ? <i className="i-phone-hangup" /> : <i className="i-mdi-phone" />}
          </button>
        </div>
      )}
    </>
  );
};

export default Basics;
