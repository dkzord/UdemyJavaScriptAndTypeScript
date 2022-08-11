exports.paginaInicial = (req, resp) => {
  resp.send(`
    <form method="post" action="/">
      Nome do caba: <input type="text" name="nome" />
      <button type="submit">Enviar</button>
    </form>
  `);
}

exports.trataPost = (req, resp) => {
  resp.send('Nova rota de post');
}