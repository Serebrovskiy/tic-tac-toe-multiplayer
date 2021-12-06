import React from 'react';
import { Cell } from '../Cell/Cell';
import './Row.css';

export function Row({ withTopBorder, value, onMoveMade }) {
  return (
    <div className="row">
      {value.map((cellValue, i) => (
        <Cell
          key={i}
          withLeftBorder={i === 0}
          withTopBorder={withTopBorder}
          onClick={() => onMoveMade(i)}
        >
          {cellValue}
        </Cell>
      ))}
    </div>
  );
}
