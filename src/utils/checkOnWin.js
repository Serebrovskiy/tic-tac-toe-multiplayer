export const checkHorizontalRow = (newBoard, rowIndex, cellIndex) => {
  let rowHorizontal = 0;
  let winner;
  let winninCells = [];

  newBoard[rowIndex].forEach((cell, index) => {
    if (cell === newBoard[rowIndex][cellIndex]) {
      rowHorizontal++;
      winninCells.push({
        rowIndex: rowIndex,
        cellIndex: index
      });
      if (rowHorizontal === 5) {
        //  console.log(`${cell} is winner!!!`);
        console.log('winninCells', winninCells);
        winner = cell;
      }
    } else {
      rowHorizontal = 0;
    }
  });

  return winner;
}

export const checkVerticalRow = (newBoard, rowIndex, cellIndex) => {
  let rowVertical = 0;
  let winner;

  for (let i = 0; i < newBoard[rowIndex].length; i++) {
    if (newBoard[rowIndex][cellIndex] === newBoard[i][cellIndex]) {
      rowVertical++;
      if (rowVertical === 5) {
        //   console.log(`${newBoard[rowIndex][cellIndex]} is winner!!!`);
        winner = newBoard[rowIndex][cellIndex];
        //return;
      }
    } else {
      rowVertical = 0;
    }
  }
  return winner;
}

export const checkDiagonalRow = (newBoard, rowIndex, cellIndex) => {
  let rowDiagonal = 0;
  let winner;
  let startCell1 = 0;
  let startRow1 = 0;
  let startCell2 = 0;
  let startRow2 = 0;
  let finishCount1 = 0;
  let finishCount2 = 0;
  // console.log('point', rowIndex, cellIndex)
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
    //  console.log(newBoard[startRow + i][startCell + i]);
    if (newBoard[startRow1 + i][startCell1 + i] === newBoard[rowIndex][cellIndex]) {
      rowDiagonal++;
      if (rowDiagonal === 5) {
        //  console.log(`${newBoard[rowIndex][cellIndex]} is winner!!!`);
        winner = newBoard[rowIndex][cellIndex];
        // return;
      }
    } else {
      //  console.log('error');
      rowDiagonal = 0;
    }
    // console.log('rowDiagonal', rowDiagonal);
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
  //console.log('finishCount2', finishCount2);
  for (let i = 0; i < finishCount2; i++) {
    // console.log(`point newBoard[${rowIndex}][${cellIndex}]`);
    // console.log(`newBoard[${startRow2 + i}][${startCell2 - i}]`);
    if (newBoard[startRow2 + i][startCell2 - i] === newBoard[rowIndex][cellIndex]) {
      //  console.log(newBoard[startRow2 + i][startCell2 - i]);
      rowDiagonal++;
      if (rowDiagonal === 5) {
        //  console.log(`${newBoard[rowIndex][cellIndex]} is winner!!!`);
        winner = newBoard[rowIndex][cellIndex];
        //return;
      }
    } else {
      //  console.log('error');
      rowDiagonal = 0;
    }
    // console.log('rowDiagonal', rowDiagonal);
  }

  return winner;
}