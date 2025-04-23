const { describe, test, beforeEach } = require('node:test');
const assert = require('node:assert');

const Board = require('../../src/game/game-board');
const Generator = require('../../src/game/game-generator');

describe('Generator', () => {
  let board;
  let generator;
  beforeEach(() => {
    board = new Board();
    generator = new Generator(board);
  });
  describe('generateSolvableBoard', () => {
    test('Should generate a board with 16 tiles', () => {
      generator.generateSolvableBoard();
      assert.strictEqual(board.values.length, 16);
    });
  });
  describe('_isSolvable', () => {
    test('Should return true for solvable board', () => {
      const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, 0];

      const result = generator._isSolvable(board);

      assert.strictEqual(result, true);
    });
    test('Should return false for unsolvable board', () => {
      const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 14, 13, 12, 0];

      const result = generator._isSolvable(board);

      assert.strictEqual(result, false);
    });
  });
});
