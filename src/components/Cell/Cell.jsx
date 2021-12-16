import React from 'react';
import './Cell.css';

export function Cell({
  withTopBorder,
  withLeftBorder,
  onClick,
  onWinner,
  winner,
  children,
}) {
  console.log('winner Cell', winner.length);
  return (
    <div
      onClick={onClick}
      className={`cell ${!children ? 'cell_empty' : ''} ${
        withTopBorder ? 'cell_with-top-border' : ''
      } ${withLeftBorder ? 'cell_with-left-border' : ''} 
      ${winner.length ? 'cell-winner' : ''}`}
    >
      {children}
    </div>
  );
}

// ${
//   onWinner ? 'newClass' : ''
// }
