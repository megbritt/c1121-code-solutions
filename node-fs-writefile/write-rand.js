const fs = require('fs');
const randomNumber = Math.random();
const data = randomNumber.toString() + '\n';

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
