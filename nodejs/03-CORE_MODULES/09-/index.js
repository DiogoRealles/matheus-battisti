const fs = require('fs');

const file_old = 'file_old.txt';
const file_new = 'file_new.txt';

fs.rename(file_old, file_new, (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(`O arquivo ${file_old} foi renomeado para ${file_new}`);
});
