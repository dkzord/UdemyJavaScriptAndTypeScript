﻿exports.middlewareGlobal = (req, resp, next) => {
  resp.locals.variavelLocal = 'Valor da variavelLocal';
  next();
}

exports.outroMiddleware = (req, resp, next) => {
  next();
}

exports.checkCsrfError = (err, req, resp, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return resp.render('404');
  }
  next();
}

exports.csrfMiddleware = (req, resp, next) => {
  resp.locals.csrfToken = req.csrfToken();
  next();
}