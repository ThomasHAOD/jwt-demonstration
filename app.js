const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const corsHeaders = require('./middleware/cors-headers');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(corsHeaders);

const token = jwt.sign(
  { email: 'test@test.com', userId: '101010' },
  'secretgoeshere',
  { expiresIn: '1h' }
);

app.get('/', (request, response) => {
  response.json({
    token: token,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
