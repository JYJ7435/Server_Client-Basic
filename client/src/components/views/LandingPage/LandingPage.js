import React from 'react';
import { FaCode } from 'react-icons/fa';

function LandingPage() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <FaCode style={{ fontSize: '4rem' }} />
        <br />
        <span style={{ fontSize: '2rem' }}>Let's Start Coding</span>
      </div>
    </>
  );
}

export default LandingPage;
