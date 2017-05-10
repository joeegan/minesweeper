import React from 'react';
import './App.css';
import _ from 'lodash';

const gridSize = 9;

const grid = _.times(gridSize)
              .map(i => (
                <ul className='row' key={i}>
                  {_.times(gridSize).map(j =>
                    <li className='cell' key={j}></li>
                  )}
                </ul>
              ));

const App = () => (
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

export default App;
