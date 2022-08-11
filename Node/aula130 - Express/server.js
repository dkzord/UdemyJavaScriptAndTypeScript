const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send(`
    <form method="post" action="/">
      Nome: <input type="text" name="nome" />
      <button type="submit">Enviar</button>
    </form>
  `);
})

app.post('/', (req, resp) => {
  resp.send(`
    alert("Enviado");
  `);
});

app.get('/contato', (req, resp) => {
  resp.send('Obrigado por entrar em contato');
});

app.listen(3000, () => {
  console.log(`Run in http://localhost:${port}`);
});
