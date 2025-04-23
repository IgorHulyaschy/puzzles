const game = require('./game/game-module');
const { setupInput } = require('./ui');

console.clear();
game.print();

const rl = setupInput((cmd) => {
  if (cmd === 'q') {
    rl.close();
    console.log('Гру завершено.');
    process.exit(0);
  }

  const moved = game.doTurn(cmd);
  if (!moved) {
    console.log('Неможливий хід!');
  }

  console.clear();
  game.print();

  if (game.isSolved()) {
    console.log('🎉 Ви виграли!');
    rl.close();
  }
});
