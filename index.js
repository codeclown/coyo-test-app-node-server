const express = require('express');

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DB_URL
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/dump-env', (req, res) => {
  res.send(Object.keys(process.env).map(key => `${key}=${process.env[key]}`).join('\n'));
});

app.get('/pg-test', async (req, res) => {
  const hello = await client.query('SELECT $1::text as message', ['Hello world from Postgres!']);
  res.send(hello.rows[0].message);
});

client.connect().then(() => {
  app.listen(8084, () => {
    console.log('coyo-test-app-node-server listening at http://localhost:8084');
  });
});
