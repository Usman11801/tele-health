// pages/index.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import TestVideoCall from '../components/TestVideoCall';

const VideoCall = dynamic(() => import('../components/VideoCall'), { ssr: false });

const HomePage = () => {
  const [channel, setChannel] = useState('');
  const [role, setRole] = useState('publisher');
  const [startCall, setStartCall] = useState(false);

  const handleStartCall = () => {6
    if (channel) {
      setStartCall(true);
    }
  };

  return (
    <div>
      {/* <h1>Agora Video Call</h1> */}
      {/* {!startCall ? (
        <div>
          <input
            type="text"
            placeholder="Enter channel name"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="publisher">Publisher</option>
            <option value="audience">Audience</option>
          </select>
          <button onClick={handleStartCall}>Start Call</button>
        </div>
      ) : ( */}
        {/* <VideoCall channel={channel} role={role} /> */}
      {/* )} */}
      <TestVideoCall/>
    </div>
  );
};

export default HomePage;
