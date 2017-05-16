import React from 'react';
import '../styles/App.css';
import _ from 'lodash';
import Face from '../containers/Face'
import Grid from '../containers/Grid'
import Clock from '../containers/Clock'

const App = () => (
  <div className='wrapper'>
    <div className='scoreBoard'>
      <div className='minesLeft digits'>
        <div className='digits-bg'>{888}</div>
        010
      </div>
      <div className='face face_smiling'>
        <div className='face-inner'>
          <Face/>
        </div>
      </div>
      <Clock/>
    </div>
    <div className='grid'>
      <Grid/>
    </div>
  </div>
);

export default App;
