const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8084, () => {
  console.log('coyo-test-app-node-server listening at http://localhost:8084');
});
