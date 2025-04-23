const { describe, test, beforeEach } = require('node:test');
const assert = require('node:assert');
const sinon = require('sinon');

const Game = require('../../src/game/game');
const Generator = require('../../src/game/game-generator');
const Board = require('../../src/game/game-board');
const Controller = require('../../src/game/game-controller');

describe('Game', () => {
  let board;
  let game;
  let controller;
  let generator;
  beforeEach(() => {
    board = new Board();
    generator = sinon.createStubInstance(Generator);
    controller = sinon.createStubInstance(Controller);
    game = new Game(generator, controller);
  });
  describe('doTurn', () => {
    test('Should move up', () => {
      controller.up.returns(true);

      const result = game.doTurn('w');
      assert.strictEqual(result, true);
      assert.strictEqual(controller.up.calledOnce, true);
      assert.strictEqual(controller.down.callCount, 0);
      assert.strictEqual(controller.left.callCount, 0);
      assert.strictEqual(controller.right.callCount, 0);
    });
    test('Should move down', () => {
      controller.down.returns(true);

      const result = game.doTurn('s');
      assert.strictEqual(result, true);
      assert.strictEqual(controller.up.callCount, 0);
      assert.strictEqual(controller.down.calledOnce, true);
      assert.strictEqual(controller.left.callCount, 0);
      assert.strictEqual(controller.right.callCount, 0);
    });
    test('Should move right', () => {
      controller.right.returns(true);

      const result = game.doTurn('d');
      assert.strictEqual(result, true);
      assert.strictEqual(controller.up.callCount, 0);
      assert.strictEqual(controller.down.callCount, 0);
      assert.strictEqual(controller.left.callCount, 0);
      assert.strictEqual(controller.right.calledOnce, true);
    });
    test('Should move left', () => {
      controller.left.returns(true);

      const result = game.doTurn('a');
      assert.strictEqual(result, true);
      assert.strictEqual(controller.up.callCount, 0);
      assert.strictEqual(controller.down.callCount, 0);
      assert.strictEqual(controller.left.calledOnce, true);
      assert.strictEqual(controller.right.callCount, 0);
    });
  });
  describe('isSolved', () => {
    test('Should return true because board is solved', () => {
      controller.getBoard.returns([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0,
      ]);

      const result = game.isSolved();

      assert.strictEqual(result, true);
      assert.strictEqual(controller.getBoard.calledOnce, true);
    });
    test('Should return false because board is not solved yet', () => {
      controller.getBoard.returns([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15,
      ]);

      const result = game.isSolved();

      assert.strictEqual(result, false);
      assert.strictEqual(controller.getBoard.calledOnce, true);
    });
  });
});
