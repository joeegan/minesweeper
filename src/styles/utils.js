import {
  compose,
  flip,
  identity,
  map,
  prop,
  unapply,
  zip
} from 'ramda'

const sides = ['top', 'right', 'bottom', 'left']

export const colors = {
  lightGrey: '#eee',
  midGrey: '#ccc',
  darkGrey: '#666',
  vDarkGrey: '#999'
}

export const borders = compose(
  map(([s, c]) => `border-${s}: 2px solid ${c};`),
  zip(sides),
  map(flip(prop)(colors)),
  unapply(identity)
)
