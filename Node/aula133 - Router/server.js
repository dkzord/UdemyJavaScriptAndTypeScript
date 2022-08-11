const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log(`Run in http://localhost:${port}`);
});
