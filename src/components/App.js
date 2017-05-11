import React from 'react';
import '../styles/App.css';
import _ from 'lodash';

const gridSize = 9;
const mine = '💣';
let face = '😃';
// const flag = '🚩';
// TODO 10 mines for beginner mode
//
// const mines = _.times(10).map(n => mine);

const handleMouseDown = ev => {
  console.log('down');
  // trigger action
  face = '😮';
}
const handleMouseUp = ev => {
  console.log('up');
  // fire action
  face = '😃';
};

// const grid = _(Array(81))
//               .fill(0, 9, 81)
//               .fill(1, 0, 9)
//               .shuffle()
//               .chunk(9)
//               .value();

const grid = _.times(gridSize)
              .map((n, i) => (
                <ul className='row' key={i}>
                  {_.times(gridSize)
                    .map(n => _.sample([mine, null, null, null, null]))
                    .map((mineOrNull, j) => (
                      <li onMouseDown={handleMouseDown}
                          onMouseUp={handleMouseUp}
                          className='cell'
                          key={j}
                      >
                          {mineOrNull}
                      </li>
                    )
                  )}
                </ul>
              ));

const App = ({ face }) => (
  <div className='wrapper'>
    <div className='scoreBoard'>
      <div className='minesLeft digits'>
        <div className='digits-bg'>888</div>
        010
      </div>
      <div className='face face_smiling'>
        <div className='face-inner'>{face}</div>
      </div>
      <div className='timeLeft digits'>
        <div className='digits-bg'>888</div>
        000
      </div>
    </div>
    <div className='grid'>{grid}</div>
  </div>
);

export default App;
