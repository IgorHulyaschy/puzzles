const readline = require('readline');

function setupInput(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    const cmd = input.trim().toLowerCase();
    if (['w', 'a', 's', 'd', 'q'].includes(cmd)) {
      callback(cmd);
    } else {
      console.log('Введіть w/a/s/d для руху або q для виходу');
    }
  });

  return rl;
}

module.exports = { setupInput };
