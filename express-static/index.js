const express = require('express');
const path = require('path');
const app = express();

const joinPublicPath = path.join(__dirname, 'public');
const server = express.static(joinPublicPath);

app.use(server, (req, res) => {});

app.listen(3000, () => { console.log('Express server listening on port 3000'); });
