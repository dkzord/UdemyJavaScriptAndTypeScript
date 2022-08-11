const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
  resp.send(`
    <form method="post" action="/">
      Nome do caba: <input type="text" name="nome" />
      <button type="submit">Enviar</button>
    </form>
  `);
})

app.get('/teste/:idUsuarios?/:parametro?', (req, resp) => {
  console.log(req.params);
  console.log(req.query);
  resp.send(req.params);
});

app.post('/', (req, resp) => {
  console.log(req.body);
  resp.send(`Dado recebido foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log(`Run in http://localhost:${port}`);
});
