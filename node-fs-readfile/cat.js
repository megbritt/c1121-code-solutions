/* Level 3 Optional Challenge */

const fs = require('fs');

let count = 2;

function readFiles() {
  fs.readFile('./' + process.argv[count], 'utf8', (err, data) => {
    if (count < process.argv.length) {
      if (err) {
        console.log('An error occurred.');
      } else {
        console.log(data);
        count++;
        readFiles();
      }
    }
  });
}

readFiles();
