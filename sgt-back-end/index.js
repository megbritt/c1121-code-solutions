const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {

  const score = Number(req.body.score);

  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined) {
    res.status(400).json({
      error: 'missing "name", "course", or "score"'
    });

    return;

  } else if (score <= 0 || score > 100) {

    res.status(400).json({
      error: 'score must be a positive integer from 0 to 100'
    });

    return;

  } else if (!Number.isInteger(score)) {

    res.status(400).json({
      error: 'score must be a positive integer from 0 to 100'
    });

    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {

  const gradeId = Number(req.params.gradeId);
  const score = Number(req.body.score);

  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined || req.params.gradeId === undefined) {
    res.status(400).json({
      error: 'missing "gradeId", "name", "course", or "score"'
    });

    return;

  } else if (score <= 0 || score > 100) {

    res.status(400).json({
      error: 'score must be a positive integer from 0 to 100'
    });

    return;

  } else if (!Number.isInteger(score)) {

    res.status(400).json({
      error: 'score must be a positive integer from 0 to 100'
    });

    return;

  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });

    return;

  }

  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *;
  `;

  const params = [req.body.name, req.body.course, req.body.score, req.params.gradeId];

  db.query(sql, params)
    .then(result => {

      const grade = result.rows[0];

      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });

      } else {
        res.status(200).json(result.rows[0]);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {

  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });

    return;

  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });

      } else {
        res.status(204).json();
      }
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
