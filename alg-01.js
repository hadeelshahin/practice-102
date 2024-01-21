function beautifulMatrix(matrix) {
    let rowIdx, colIdx;
  
    // Find the row and column indices of the number 1
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (matrix[i][j] === 1) {
          rowIdx = i;
          colIdx = j;
          break;
        }
      }
    }
  
    // Calculate the minimum number of moves to center the 1
    const rowMoves = Math.abs(rowIdx - 2); // 2 is the center row index
    const colMoves = Math.abs(colIdx - 2); // 2 is the center column index
  
    // Print the result
    console.log(rowMoves + colMoves);
  }
  
  // Example usage
  const inputMatrix = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  
  beautifulMatrix(inputMatrix);