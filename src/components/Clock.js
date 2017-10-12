import React from 'react'

const Clock = ({ tick }) =>
  <div className="timeLeft digits">
    <div className="digits-bg">888</div>
    <div className="digits-numbers">
      {tick.toString().padStart(3, 0)}
    </div>
  </div>

export default Clock
