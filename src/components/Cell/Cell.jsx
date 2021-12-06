import React from 'react';
import './Cell.css';

export function Cell({ withTopBorder, withLeftBorder, onClick, children }) {
  return (
    <div
      onClick={onClick}
      className={`cell ${!children ? 'cell_empty' : ''} ${
        withTopBorder ? 'cell_with-top-border' : ''
      } ${withLeftBorder ? 'cell_with-left-border' : ''}`}
    >
      {children}
    </div>
  );
}
