export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_VALUE = 'CHANGE_VALUE'
export function increment () {
  return { type: INCREMENT }
}
export const decrement = () => ({ type: DECREMENT })

export const changeValue = () => ({ type: CHANGE_VALUE })
