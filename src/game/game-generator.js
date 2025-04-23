module.exports = class Generator {
  constructor(board) {
    this.board = board;
  }

  generateSolvableBoard() {
    let board = [...Array(15).keys()].map((i) => i + 1).concat(0);
    while (!this._isSolvable(board)) {
      board = this._shuffle(board);
    }
    this.board.values = board;
  }

  _isSolvable(board) {
    let invCount = 0;
    for (let i = 0; i < 15; i++) {
      for (let j = i + 1; j < 16; j++) {
        // Count inversions  only for none-zero tiles
        if (board[i] && board[j] && board[i] > board[j]) {
          invCount++;
        }
      }
    }
    const blankRow = Math.floor(board.indexOf(0) / 4);

    return (invCount + blankRow) % 2 === 0;
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
};
