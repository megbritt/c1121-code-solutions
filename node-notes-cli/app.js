const fs = require('fs');
const dataJSON = require('./data.json');
const notes = dataJSON.notes;

function changeData() {
  const data = dataJSON;
  const jsonString = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', jsonString, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}

for (const key in notes) {
  if (process.argv[2] === 'read') {
    console.log(`${key}: ${notes[key]}`);
  }
}

if (process.argv[2] === 'create') {
  notes[dataJSON.nextId] = process.argv[3];
  dataJSON.nextId++;
  changeData();
} else if (process.argv[2] === 'delete') {
  delete notes[process.argv[3]];
  changeData();
} else if (process.argv[2] === 'update') {
  notes[process.argv[3]] = process.argv[4];
  changeData();
}
