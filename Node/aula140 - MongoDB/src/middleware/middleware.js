exports.middlewareGlobal = (req, resp, next) => {
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('Cavalcanti', 'Não use Cavalcanti');
    console.log();
    console.log(`Você postou ${req.body.cliente}`);
    console.log();
  }
  next();
}

exports.outroMiddleware = (req, resp, next) => {
  next();
}