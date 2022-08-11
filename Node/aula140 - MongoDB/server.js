require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Connected to Mongo DB...');
    app.emit('OK');
  })
  .catch(e => console.log('Error connecting to Mongo ' + e.message));

const port = 3000;
const routes = require('./routes')
const path = require('path');
const { middlewareGlobal } = require('./src/middleware/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Middleware pessoais.
app.use(middlewareGlobal);
app.use(routes);

app.on('OK', () => {
  app.listen(3000, () => {
    console.log(`Run in http://localhost:${port}`);
  });
});

