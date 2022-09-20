import { combineReducers } from "redux";
import { boardReducer } from "./boardReducer";
import { playerReducer } from "./playerReducer";
import { winnerReducer } from "./winnerReducer";
import { popupReducer } from "./popupReducer";

export const rootReducer = combineReducers({
  board: boardReducer,
  player: playerReducer,
  winner: winnerReducer,
  popup: popupReducer
})