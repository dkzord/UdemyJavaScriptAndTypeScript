/*
const HomeModel = require('../models/HomeModel');

HomeModel.create({
  titulo: 'Outro teste',
  descricao: 'Uma descricao Novamente',
})
  .then((dados) => {
    console.log(dados);
  })
  .catch((err) => { console.error(err); });

HomeModel.find()
  .then((dados) => {
    console.log(dados);
  })
  .catch((err) => { console.error(err); });
  */

exports.paginaInicial = (req, resp) => {
  resp.render('index');
  return;
}

exports.trataPost = (req, resp) => {
  resp.send(req.body);
  return;
}