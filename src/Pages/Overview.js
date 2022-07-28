/** @format */

import React from 'react';
import './Styling.css';

function Overview() {
  return (
    <div className='Overview'>
      {/* TOP */}
      <div className='Brand'>muztafawi</div>

      {/* MIDDLE */}
      <div className='Title'>
        <h1 className='T1'>
          Play The code & <br /> Design like A Game
        </h1>
        <p className='Des'>
          It is a long established fact that a reader will be distracted <br />
          by the readable a content. Will be distracted by in to the <br />
          readable content.
        </p>
      </div>

      {/* BOTTOM */}
      <div className='Footer'>
        <div className='Q1'>
          <p>
            It is a long established fact that <br />
            a reader will be distracted by in <br />
            readable content.
          </p>
        </div>
        <div className='Q2'>
          <p>
            It is a long established fact that <br />
            a reader will be distracted by in <br />
            readable content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
