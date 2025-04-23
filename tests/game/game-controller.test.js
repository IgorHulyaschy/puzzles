const { describe, test, beforeEach } = require('node:test');
const assert = require('node:assert');

const Board = require('../../src/game/game-board');
const Controller = require('../../src/game/game-controller');

describe('Controller', () => {
  let board;
  let controller;
  beforeEach(() => {
    board = new Board();
    controller = new Controller(board);
  });
  describe('up', () => {
    test('should move the empty tile up if possible', () => {
      controller.board.values = [1, 2, 3, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, 4];

      assert.strictEqual(board.values[3], 0);
      assert.strictEqual(board.values[7], 8);
      assert.strictEqual(board.emptyIndex, 3);

      controller.up();

      assert.strictEqual(board.values[3], 8);
      assert.strictEqual(board.values[7], 0);
      assert.strictEqual(board.emptyIndex, 7);
    });

    test('should not move the empty tile up if it is in the top row', () => {
      controller.board.values = [1, 2, 3, 8, 5, 6, 7, 12, 9, 10, 11, 17, 13, 15, 14, 0];

      assert.strictEqual(board.values[3], 8);
      assert.strictEqual(board.values[7], 12);
      assert.strictEqual(board.values[11], 17);
      assert.strictEqual(board.values[15], 0);
      assert.strictEqual(board.emptyIndex, 15);

      controller.up();

      assert.strictEqual(board.values[3], 8);
      assert.strictEqual(board.values[7], 12);
      assert.strictEqual(board.values[11], 17);
      assert.strictEqual(board.values[15], 0);
      assert.strictEqual(board.emptyIndex, 15);
    });
  });

  describe('down', () => {
    test('should move the empty tile down if possible', () => {
      controller.board.values = [1, 2, 3, 8, 5, 6, 7, 0, 9, 10, 11, 12, 13, 15, 14, 4];

      assert.strictEqual(board.values[3], 8);
      assert.strictEqual(board.values[7], 0);
      assert.strictEqual(board.emptyIndex, 7);

      controller.down();

      assert.strictEqual(board.values[3], 0);
      assert.strictEqual(board.values[7], 8);
      assert.strictEqual(board.emptyIndex, 3);
    });
  });

  describe('left', () => {
    test('should move the empty tile down if possible', () => {
      controller.board.values = [1, 2, 3, 8, 5, 6, 0, 7, 9, 10, 11, 12, 13, 15, 14, 4];

      assert.strictEqual(board.values[6], 0);
      assert.strictEqual(board.values[7], 7);
      assert.strictEqual(board.emptyIndex, 6);

      controller.left();

      assert.strictEqual(board.values[6], 7);
      assert.strictEqual(board.values[7], 0);
      assert.strictEqual(board.emptyIndex, 7);
    });
  });

  describe('right', () => {
    test('should move the empty tile down if possible', () => {
      controller.board.values = [1, 2, 3, 8, 5, 6, 7, 0, 9, 10, 11, 12, 13, 15, 14, 4];

      assert.strictEqual(board.values[6], 7);
      assert.strictEqual(board.values[7], 0);
      assert.strictEqual(board.emptyIndex, 7);

      controller.right();

      assert.strictEqual(board.values[6], 0);
      assert.strictEqual(board.values[7], 7);
      assert.strictEqual(board.emptyIndex, 6);
    });
  });
});
