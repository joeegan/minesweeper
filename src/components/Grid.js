import React from 'react'
import Cell from '../containers/Cell'

const Grid = ({ grid }) => {
  return (
    <div>
      {grid.map((row, i) => (
        <ul className='row' key={i}>
          {row.map((data) => (
            <Cell key={data.index} data={data} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Grid
