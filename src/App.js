import React, { Component } from 'react';

import './App.css';
import _ from 'lodash';

const grid = _.times(9)
              .map(i => (
                <ul className='row'>
                  {_.times(9).map(i => <li className='cell'></li>)}
                </ul>
              ))

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='scoreBoard'>
          <div className='minesLeft digits'>010</div>
          <div className='face face_smiling'>
            <div className='face-inner'>😃</div>
          </div>
          <div className='timeLeft digits'>000</div>
        </div>
        <div className='grid'>{grid}</div>
      </div>
    );
  }
}

export default App;
