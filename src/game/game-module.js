const Board = require('./game-board');
const Generator = require('./game-generator');
const Controller = require('./game-controller');
const Game = require('./game');

// Creating singleton instance for board to separate init and game logic
const board = new Board();
const generator = new Generator(board);
const controller = new Controller(board);

module.exports = new Game(generator, controller);
