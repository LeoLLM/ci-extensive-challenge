const express = require('express');
const _ = require('lodash');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('CI Extensive Challenge API');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'operational',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});