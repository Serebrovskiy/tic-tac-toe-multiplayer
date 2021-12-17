import React from 'react';
import { Cell } from '../Cell/Cell';
import './Row.css';

export function Row({ withTopBorder, value, onMoveMade, winner }) {
  //console.log('winner Row', winner);
  return (
    <div className="row">
      {value.map((cellValue, i) => (
        <Cell
          key={i}
          withLeftBorder={i === 0}
          withTopBorder={withTopBorder}
          onClick={() => onMoveMade(i)}
          winner={winner && winner.filter((cell) => cell.cellIndex === i)}
        >
          {cellValue}
        </Cell>
      ))}
    </div>
  );
}
// onWinner={() => onWinner(i)}
//winner={winner && winner.cellIndex === i}
