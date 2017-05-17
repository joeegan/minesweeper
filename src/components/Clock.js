import React from 'react';
import _ from 'lodash';

const Clock = ({ tick }) => (
  <div className='timeLeft digits'>
    <div className='digits-bg'>888</div>
    {_.padStart(tick, 3, 0)}
  </div>
);

export default Clock;
