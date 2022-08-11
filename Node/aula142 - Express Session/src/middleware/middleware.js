exports.middlewareGlobal = (req, resp, next) => {
  resp.locals.variavelLocal = 'Valor da variavelLocal';
  next();
}

exports.outroMiddleware = (req, resp, next) => {
  next();
}