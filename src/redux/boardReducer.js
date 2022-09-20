import { UPDATE_BOARD } from "./types"
import { boardStart } from '../utils/board';

export const boardReducer = (state = boardStart, action) => {
  console.log('boardReducer action', action.type)
  switch (action.type) {
    case UPDATE_BOARD: {
      const newBoard = action.payload
      return [...newBoard]
    }
    default: {
      console.log('default board')
      return state
    }
  }

}