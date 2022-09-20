import { POPUP } from "./types"

const initialState = false

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP: {
      const popup = action.payload
      return popup
    }
    default:
      return state
  }
}