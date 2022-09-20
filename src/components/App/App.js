import React, { } from 'react';
import { Settings } from '../Settings/Settings';
import { Row } from '../Row/Row';
import { Popup } from '../Popup/Popup';
import './App.css';
import { useGame } from '../../hooks/useGame';

export function App() {

  const { board, winner, isOpenPopup, currentPlayer, closePopup, onChangeBoardSize, onMoveMade } = useGame();
  //console.log('board', board)

  return (
    <div className="app">
      <Settings onChangeBoardSize={onChangeBoardSize} isDisabled={!board} />
      <div className="app__base">
        {
          board &&
          board.map(
            (v, i) => <Row
              key={i}
              withTopBorder={i === 0}
              value={board[i]}
              onMoveMade={(cellIndex) => onMoveMade(i, cellIndex)}
              winner={winner && winner.filter((row) => row.rowIndex === i)}
            />
          )}
      </div>
      <Popup
        isOpen={isOpenPopup}
        onClose={closePopup}
        currentPlayer={currentPlayer}
      />
    </div>
  )
}

export default App;

//winner={winner && winner.find((row) => row.rowIndex === i)}