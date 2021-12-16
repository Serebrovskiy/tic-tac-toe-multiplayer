export const checkHorizontalRow = (newBoard, rowIndex, cellIndex) => {
  let winningCells = [];

  for (let i = 0; i < newBoard[rowIndex].length; i++) {
    if (newBoard[rowIndex][cellIndex] === newBoard[rowIndex][i]) {
      winningCells.push({
        rowIndex: rowIndex,
        cellIndex: i
      });
      if (winningCells.length === 5) {
        return winningCells;
      }
    } else {
      winningCells = [];
    }
  };
  // return winningCells;
}

export const checkVerticalRow = (newBoard, rowIndex, cellIndex) => {
  let winningCells = [];

  for (let i = 0; i < newBoard[rowIndex].length; i++) {
    if (newBoard[rowIndex][cellIndex] === newBoard[i][cellIndex]) {
      winningCells.push({
        rowIndex: i,
        cellIndex: cellIndex
      });
      if (winningCells.length === 5) {
        return winningCells;
      }
    } else {
      winningCells = [];
    }
  }
}

export const checkDiagonalRow = (newBoard, rowIndex, cellIndex) => {
  let winningCells = [];
  let startCell1 = 0;
  let startRow1 = 0;
  let startCell2 = 0;
  let startRow2 = 0;
  let finishCount1 = 0;
  let finishCount2 = 0;

  if (rowIndex >= cellIndex) {
    startCell1 = 0;
    startRow1 = rowIndex - cellIndex;
    finishCount1 = newBoard.length - startRow1;
  } else {
    startRow1 = 0;
    startCell1 = cellIndex - rowIndex;
    finishCount1 = newBoard.length - startCell1;
  }

  for (let i = 0; i < finishCount1; i++) {
    if (newBoard[startRow1 + i][startCell1 + i] === newBoard[rowIndex][cellIndex]) {
      winningCells.push({
        rowIndex: startRow1 + i,
        cellIndex: startCell1 + i
      });
      if (winningCells.length === 5) {
        return winningCells;
      }
    } else {
      winningCells = [];
    }
  }

  if (newBoard.length > (rowIndex + cellIndex)) {
    finishCount2 = (rowIndex + cellIndex) + 1;
    startRow2 = 0;
    startCell2 = rowIndex + cellIndex;
  } else {
    finishCount2 = ((newBoard.length * 2) - (rowIndex + cellIndex)) - 1;
    startRow2 = ((rowIndex + cellIndex) - newBoard.length) + 1;
    startCell2 = newBoard.length - 1;
  }

  for (let i = 0; i < finishCount2; i++) {

    if (newBoard[startRow2 + i][startCell2 - i] === newBoard[rowIndex][cellIndex]) {
      winningCells.push({
        rowIndex: startRow1 + i,
        cellIndex: startCell1 - i
      });
      if (winningCells.length === 5) {
        return winningCells;
      }
    } else {
      winningCells = [];
    }
  }

}