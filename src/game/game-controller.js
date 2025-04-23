module.exports = class Controller {
  constructor(board) {
    this.board = board;
  }

  getBoard() {
    return this.board.values;
  }

  up() {
    const idx = this.board.emptyIndex;
    const y = Math.floor(idx / 4);
    let target;

    if (y < 3) target = idx + 4;

    return this._move(target, idx);
  }

  down() {
    const idx = this.board.emptyIndex;
    const y = Math.floor(idx / 4);
    let target;

    if (y > 0) target = idx - 4;

    return this._move(target, idx);
  }

  left() {
    const idx = this.board.emptyIndex;
    const x = idx % 4;
    let target;

    if (x < 3) target = idx + 1;

    return this._move(target, idx);
  }

  right() {
    const idx = this.board.emptyIndex;
    const x = idx % 4;
    let target;

    if (x > 0) target = idx - 1;

    return this._move(target, idx);
  }

  _move(target, idx) {
    if (target) {
      [this.board.values[idx], this.board.values[target]] = [
        this.board.values[target],
        this.board.values[idx],
      ];
      return true;
    }
    return false;
  }
};
