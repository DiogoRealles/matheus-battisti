const chalk = require('chalk');

const note = 4;

if (note <= 5) {
  console.log(chalk.bgRed.black('Reprovado ;('));
} else if (note === 6) {
  console.log(chalk.bgBlue.black('Recuperação ;|'));
} else {
  console.log(chalk.bgGreen.white('Aprovado :)'));
}
