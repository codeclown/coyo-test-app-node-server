const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/write-and-read-volume', (req, res) => {
  let counter = 0;
  try {
    counter = parseInt(fs.readFileSync('/mounted-volume/counter.txt', 'utf-8'));
  } catch (error) {
    // File does not exist yet
  }
  counter += 1;
  counter = counter.toString();
  fs.writeFileSync('/mounted-volume/counter.txt', counter);
  res.set('content-type', 'text/html').send(counter);
});

app.listen(8084, () => {
  console.log('coyo-test-app-node-server listening at http://localhost:8084');
});
