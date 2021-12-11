import React, { useEffect, useState } from 'react';
import { Settings } from '../Settings/Settings';
import { Row } from '../Row/Row';
import { range } from '../../utils/range';
import { fakeApi } from '../../utils/api';
import { checkHorizontalRow, checkVerticalRow, checkDiagonalRow } from '../../utils/checkOnWin';
import './App.css';

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
  const [currentPlayer, setCurrentPlayer] = useState('X');

  useEffect(() => {
    fakeApi.getField().then(
      ({ field, player }) => {
        if (field) {
          setBoard(field);
        }
        if (player) {
          setCurrentPlayer(player)
        }
      }
    )
  }, []);

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

    let winner;

    //проверяем горизонтыльный ряд на победу 
    if (checkHorizontalRow(newBoard, rowIndex, cellIndex)) {
      winner = checkHorizontalRow(newBoard, rowIndex, cellIndex);
    }
    //проверяем вертикальный ряд на победу
    if (checkVerticalRow(newBoard, rowIndex, cellIndex)) {
      winner = checkVerticalRow(newBoard, rowIndex, cellIndex);
    }
    //проверяем диагональный ряд на победу
    if (checkDiagonalRow(newBoard, rowIndex, cellIndex)) {
      winner = checkDiagonalRow(newBoard, rowIndex, cellIndex);
    }
    if (winner) {
      console.log('+++++++++++ Winner  ', winner, '  +++++++++++');
    }


    console.log('-------');

    // передаем данные "бэкенду"
    fakeApi.saveField({ field: newBoard, player: newPlayer });
    setCurrentPlayer(newPlayer);
  }

  const onChangeBoardSize = (newSize) => {
    const emptyBoard = range(newSize)
      .map(v => range(newSize));

    setBoard(emptyBoard)

    // передаем данные "бэкенду"
    fakeApi.saveField({ field: emptyBoard, player: 'X' })
  }

  return <div className="app">
    {/* tic-tac-toe-multiplayer */}
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
          />
        )
      }
    </div>
  </div>
}

export default App;
