export const CELL_PRESSED = 'CELL_PRESSED'
export const CELL_UNCOVERED = 'CELL_UNCOVERED'
export const BEGIN = 'BEGIN'

export const cellPressed = () => {
  console.log('cell pressed actions')
  return {
    type: CELL_PRESSED
  }
}

export const cellUncovered = (index) => {
  console.log('cell uncovered actions')
  return {
    type: CELL_UNCOVERED,
    index,
  }
}
