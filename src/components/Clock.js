import React from 'react'
import _ from 'lodash'

const Clock = ({ tick }) =>
  <div className="timeLeft digits">
    <div className="digits-bg">888</div>
    <div className="digits-numbers">
      {_.padStart(tick, 3, 0)}
    </div>
  </div>

export default Clock
