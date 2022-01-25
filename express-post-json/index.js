const express = require('express');
const app = express();
const grades = {};

let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (const id in grades) {
    gradesArray.push(grades[id]);
  }

  res.json(gradesArray);

});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.score = parseInt(req.body.score);
  req.body.id = nextId;

  grades[nextId] = req.body;

  nextId++;

  res.status(201);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
