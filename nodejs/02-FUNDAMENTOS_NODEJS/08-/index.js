const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Qual a sua linguagem preferida? ', (language) => {
  if (language === 'html') {
    console.log('HTML nem é linguagem de programação :/');
  } else {
    console.log(`Minha linguagem preferida é: ${language}`);
  }
  readline.close();
});
