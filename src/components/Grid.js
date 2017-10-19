import React from 'react'
import Cell from '../containers/Cell'
import { GridBorder } from './App.styled'
import styled from 'styled-components'

const Row = styled.ul`display: flex;`

const getLiClassName = (uncovered, flagged) => {
  if (uncovered) return 'uncovered'
  if (flagged) return 'flagged'
  return ''
}
const Grid = ({ grid }) =>
  <GridBorder>
    {grid.map((row, i) =>
      <Row key={i}>
        {row.map(data =>
          <Cell
            key={data.index}
            index={data.index}
            uncovered={data.uncovered}
            flagged={data.flagged}
            content={data.content}
            selectedMine={data.selectedMine}
          />
        )}
      </Row>
    )}
  </GridBorder>

export default Grid
