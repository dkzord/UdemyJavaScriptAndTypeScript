const express = require('express');
const app = express();
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

app.listen(3000, () => {
  console.log(`Run in http://localhost:${port}`);
});
