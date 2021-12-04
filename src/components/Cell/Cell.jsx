import React from 'react';
import './Cell.css';

export function Cell({ withTopBorder, withLeftBorder }) {
  return (
    <div
      className={`cell ${
        ''
        // !children ? 'cell_empty': ''
      } ${withTopBorder ? 'cell_with-top-border' : ''} ${
        withLeftBorder ? 'cell_with-left-border' : ''
      }`}
    ></div>
  );
}
