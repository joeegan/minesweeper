import React from 'react';

const Clock = ({ tick }) => (
  <div className='timeLeft digits'>
    <div className='digits-bg'>888</div>
    {tick}
  </div>
);

export default Clock;
