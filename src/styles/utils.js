const sides = ['top', 'right', 'bottom', 'left']

const lightGrey = '#eee'
const midGrey = '#ccc'
const darkGrey = '#666'
const vDarkGrey = '#999'

export const colors = {
  lightGrey,
  midGrey,
  darkGrey,
  vDarkGrey
}

export const borders = (...bColors) =>
  bColors.map(
    (c, i) => `border-${sides[i]}: 2px solid ${colors[c]};`
  )
