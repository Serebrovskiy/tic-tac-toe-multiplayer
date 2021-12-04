import React from 'react';
import { Cell } from '../Cell/Cell';
import { range } from '../../utils/range';
import './Row.css';

export function Row({ withTopBorder, cellsCount }) {
  return (
    <div className="row">
      {range(cellsCount).map((v, i) => (
        <Cell key={i} withLeftBorder={i === 0} withTopBorder={withTopBorder} />
      ))}
    </div>
  );
}
