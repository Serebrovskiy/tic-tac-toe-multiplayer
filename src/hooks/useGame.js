import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { range } from '../utils/range';
import { fakeApi } from '../utils/api';
import { boardStart } from '../utils/board';
import { getOtherPlayer } from '../utils/getOtherPlayer';
import { checkHorizontalRow, checkVerticalRow, checkDiagonalRow } from '../utils/checkOnWin';
import { UPDATE_BOARD, CHANGE_PLAYER, WINNER, POPUP } from "../redux/types"


export function useGame() {

  const dispatch = useDispatch();
  const board = useSelector(store => store.board);
  const winner = useSelector(store => store.winner);
  const currentPlayer = useSelector(store => store.player);
  const isOpenPopup = useSelector(store => store.popup);

  const handlePopupOpen = () => {
    dispatch({
      type: POPUP,
      payload: true
    })
  }

  const closePopup = () => {
    dispatch({
      type: UPDATE_BOARD,
      payload: boardStart
    })
    dispatch({
      type: POPUP,
      payload: false
    })
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

    dispatch({
      type: UPDATE_BOARD,
      payload: newBoard
    })

    //проверяем горизонтыльный ряд на победу 
    if (checkHorizontalRow(newBoard, rowIndex, cellIndex)) {
      dispatch({
        type: WINNER,
        payload: checkHorizontalRow(newBoard, rowIndex, cellIndex)
      })
      return;
    }
    //проверяем вертикальный ряд на победу
    if (checkVerticalRow(newBoard, rowIndex, cellIndex)) {
      dispatch({
        type: WINNER,
        payload: checkVerticalRow(newBoard, rowIndex, cellIndex)
      })
      return;
    }
    //проверяем диагональный ряд на победу
    if (checkDiagonalRow(newBoard, rowIndex, cellIndex)) {
      dispatch({
        type: WINNER,
        payload: checkDiagonalRow(newBoard, rowIndex, cellIndex)
      })
      return;
    }

    console.log('-------');

    const newPlayer = getOtherPlayer(currentPlayer);

    // передаем данные "бэкенду"
    fakeApi.saveField({ field: newBoard, player: newPlayer });
    dispatch({
      type: CHANGE_PLAYER,
      payload: newPlayer
    })
  }

  const onChangeBoardSize = (newSize) => {
    const emptyBoard = range(newSize)
      .map(v => range(newSize));

    dispatch({
      type: UPDATE_BOARD,
      payload: emptyBoard
    })
    dispatch({
      type: WINNER,
      payload: []
    })

    // передаем данные "бэкенду"
    fakeApi.saveField({ field: emptyBoard, player: 'X' })
  }

  useEffect(() => {
    fakeApi.getField().then(
      ({ field, player }) => {
        if (field) {
          dispatch({
            type: UPDATE_BOARD,
            payload: field
          })
        }
        if (player) {
          dispatch({
            type: CHANGE_PLAYER,
            payload: player
          })
        }
      }
    )
  }, []);

  useEffect(() => {
    if (winner.length) {
      handlePopupOpen();

      console.log('+++++++++++ Winner  ', currentPlayer, '   ', winner, '  +++++++++++');
    }
  }, [winner]);

  return { board, winner, isOpenPopup, currentPlayer, closePopup, onChangeBoardSize, onMoveMade };
}