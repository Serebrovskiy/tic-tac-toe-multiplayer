import './App.css';
import { Settings } from '../Settings/Settings';
import { Row } from '../Row/Row';
import React, { useState } from 'react';
import { range } from '../../utils/range';

export function App() {
  const [boardSize, setBoardSize] = useState(3);

  const onChangeBoardSize = (newSize) => {
    setBoardSize(newSize);
  }


  return <div className="app">
    {/* tic-tac-toe-multiplayer */}
    <Settings onChangeBoardSize={onChangeBoardSize} />
    <div className="app__base">
      {
        range(boardSize).map(
          (v, i) => <Row
            key={i}
            withTopBorder={i === 0}
            cellsCount={boardSize}
          />
        )
      }
    </div>
  </div>
}

export default App;