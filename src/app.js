const express = require('express');
const cors = require('cors');
const dictionaryController = require('./resources/dictionary/controller');
const app = express();

// middleware
app.use(cors());

app.use((req, _res, next) => {
  console.log(`${req.ip} hit the endpoint`);
  next();
});

// routes
app.get('/', dictionaryController.getRandomDefinition);
//app.get('/word', dictionaryController.getWordById);

module.exports = app;