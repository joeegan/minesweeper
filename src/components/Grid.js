import React from 'react'
import Cell from '../containers/Cell'
import { GridBorder } from './App.styled'

const getLiClassName = (uncovered, flagged) => {
  if (uncovered) return 'cell uncovered'
  if (flagged) return 'cell flagged'
  return 'cell'
}
const Grid = ({ grid }) =>
  <GridBorder>
    {grid.map((row, i) =>
      <ul className="row" key={i}>
        {row.map(data =>
          <Cell
            key={data.index}
            index={data.index}
            uncovered={data.uncovered}
            content={data.content}
            selectedMine={data.selectedMine}
            liClassName={getLiClassName(
              data.uncovered,
              data.flagged
            )}
          />
        )}
      </ul>
    )}
  </GridBorder>

export default Grid
