function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperando(msg, timeout) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(false);
      return;
    }

    setTimeout(() => {
      // console.log(msg);
      resolve(msg);
    }, timeout);
  })
}

// esperando('Etapa 1', rand(1, 3))
//   .then(resposta => {
//     console.log(resposta);
//     return esperando('Etapa 2', rand(1, 3));
//   }).then(resposta => {
//     console.log(resposta);
//     return esperando('Etapa 3', rand(1, 3));
//   }).then(resposta => {
//     console.log(resposta);
//   })
//   .catch();

// Promises que podem ser útil e são muito usadas
// Promise.all=> Passa um array com promeças ou com valores resolvido e ele entrega uma promessa com os valores dentro de um array. Encontrou um erro já vai rejeitar todas.

const promises = [
  esperando('Promise 1', 3000),
  esperando('Promise 2', 500),
  esperando('Promise 3', 1000),
];

/* Promise.all(promises).then(function (valor) {
  console.log(valor);
}).catch(function (err) {
  console.error(err);
}) */

// Promise.race => Como se fosse uma corrida, a primeira resolvida já entrega o valor;
/* Promise.race(promises).then(function (valor) {
  console.log(valor);
}).catch(function (err) {
  console.error(err);
}) */

//Promise.resolve, 
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject('Página baixada em cache');
  } else {
    return esperando('Página baixada', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(err => console.log('Erro meu pai', err));

//Promise.reject


