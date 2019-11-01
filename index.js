const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/dump-env', (req, res) => {
  res.send(Object.keys(process.env).map(key => `${key}=${process.env[key]}`).join('\n'));
});

app.listen(8084, () => {
  console.log('coyo-test-app-node-server listening at http://localhost:8084');
});
