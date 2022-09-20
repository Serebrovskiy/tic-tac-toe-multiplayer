import { CHANGE_PLAYER } from "./types"

const initialState = 'X'

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER: {
      const newPlayer = action.payload
      return newPlayer
    }
    default:
      return state
  }
}