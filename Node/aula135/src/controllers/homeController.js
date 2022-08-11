exports.paginaInicial = (req, resp) => {
  resp.render('index');
}

exports.trataPost = (req, resp) => {
  resp.send('Nova rota de post');
}