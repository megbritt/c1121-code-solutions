/* Level 1 */

const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
