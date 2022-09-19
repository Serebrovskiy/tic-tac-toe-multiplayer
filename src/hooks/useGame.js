import React, { useEffect, useState } from 'react';
import { range } from '../utils/range';
import { boardStart } from '../utils/board';
import { fakeApi } from '../utils/api';
import { getOtherPlayer } from '../utils/getOtherPlayer';
import { checkHorizontalRow, checkVerticalRow, checkDiagonalRow } from '../utils/checkOnWin';


export function useGame() {

  const [board, setBoard] = useState(boardStart);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);


  const handlePopupOpen = () => {
    setIsOpenPopup(true);
  }

  const closePopup = () => {
    setBoard(boardStart);
    setIsOpenPopup(false);
  }

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
    // console.log('checkHorizontalRow', checkHorizontalRow(newBoard, rowIndex, cellIndex));
    //проверяем горизонтыльный ряд на победу 
    if (checkHorizontalRow(newBoard, rowIndex, cellIndex)) {
      setWinner([...checkHorizontalRow(newBoard, rowIndex, cellIndex)]);
    }
    //проверяем вертикальный ряд на победу
    if (checkVerticalRow(newBoard, rowIndex, cellIndex)) {
      setWinner(checkVerticalRow(newBoard, rowIndex, cellIndex));
    }
    //проверяем диагональный ряд на победу
    if (checkDiagonalRow(newBoard, rowIndex, cellIndex)) {
      setWinner(checkDiagonalRow(newBoard, rowIndex, cellIndex));
    }

    console.log('-------');

    // передаем данные "бэкенду"
    fakeApi.saveField({ field: newBoard, player: newPlayer });
    setCurrentPlayer(newPlayer);
  }

  const onChangeBoardSize = (newSize) => {
    const emptyBoard = range(newSize)
      .map(v => range(newSize));

    setBoard(emptyBoard);
    setWinner([]);

    // передаем данные "бэкенду"
    fakeApi.saveField({ field: emptyBoard, player: 'X' })
  }

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

  useEffect(() => {
    if (winner.length) {
      handlePopupOpen();
      console.log('+++++++++++ Winner  ', winner, '  +++++++++++');
    }
  }, [winner]);

  return { board, winner, isOpenPopup, closePopup, onChangeBoardSize, onMoveMade };
}