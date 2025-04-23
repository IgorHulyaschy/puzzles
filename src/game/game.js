module.exports = class Game {
  constructor(generator, controller) {
    generator.generateSolvableBoard();
    this.controller = controller;
  }

  doTurn(cmd) {
    let moved = false;
    switch (cmd) {
      case 'w': {
        moved = this.controller.up();
        break;
      }
      case 's': {
        moved = this.controller.down();
        break;
      }
      case 'a': {
        moved = this.controller.left();
        break;
      }
      case 'd': {
        moved = this.controller.right();
        break;
      }
    }

    return moved;
  }

  isSolved() {
    const board = this.controller.getBoard();
    for (let i = 0; i < 15; i++) {
      if (board[i] !== i + 1) return false;
    }
    return board[15] === 0;
  }

  print() {
    for (let i = 0; i < 4; i++) {
      const row = this.controller
        .getBoard()
        .slice(i * 4, i * 4 + 4)
        .map((n) => (n === 0 ? '  ' : n.toString().padStart(2, ' ')))
        .join(' ');
      console.log(row);
    }
  }
};
