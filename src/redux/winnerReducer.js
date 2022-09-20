import { WINNER } from "./types"

const initialState = []

export const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case WINNER: {
      console.log('WINNER', action.payload)
      const winner = action.payload
      return winner
    }
    default:
      return state
  }

}