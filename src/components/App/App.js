import './App.css';
import { Settings } from '../Settings/Settings';
import { Row } from '../Row/Row';
import React, { useState } from 'react';
import { range } from '../../utils/range';

const getOtherPlayer = currentPlayer => {
  if (currentPlayer === undefined) {
    return;
  }
  return currentPlayer === 'X' ? 'O' : 'X'
}

export function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [currentPlayer, serCurrentPlayer] = useState('X');

  const onMoveMade = (rowIndex, cellIndex) => {
    const isCellEmpty = board[rowIndex][cellIndex] === null;
    if (!isCellEmpty) {
      return;
    }
    const newBoard = [...board];
    newBoard[rowIndex] = board[rowIndex].map((val, i) => {
      return i === cellIndex ? currentPlayer : val;
    });

    setBoard(newBoard);
    const newPlayer = getOtherPlayer(currentPlayer);
    serCurrentPlayer(newPlayer);
  }

  const onChangeBoardSize = (newSize) => {
    setBoard(
      range(newSize).map(v => range(newSize))
    );
  }

  return <div className="app">
    {/* tic-tac-toe-multiplayer */}
    <Settings onChangeBoardSize={onChangeBoardSize} />
    <div className="app__base">
      {
        board.map(
          (v, i) => <Row
            key={i}
            withTopBorder={i === 0}
            value={board[i]}
            onMoveMade={(cellIndex) => onMoveMade(i, cellIndex)}
          />
        )
      }
    </div>
  </div>
}

export default App;