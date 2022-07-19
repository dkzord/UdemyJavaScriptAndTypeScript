function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperando(msg, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Não é um número!!!');
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei da promise');
    }, timeout);
  })
}

/* esperando('Fase 1', rand())
  .then(valor => {
    console.log(valor);
    return esperando('Fase 2', rand());
  })
  .then(valor => {
    console.log(valor);
    return esperando('Fase 3', rand());
  })
  .then(valor => {
    console.log(valor);
    return valor;
  }).then(valor => {
    console.log('terminamos na fase: ', valor);
  }).catch(erro => console.log(erro)); */


async function executa() {
  try {
    const fase1 = await esperando('Fase 1', rand());
    console.log(fase1);
    const fase2 = await esperando('Fase 2', rand());
    console.log(fase2);
    const fase3 = await esperando('Fase 3', rand());
    console.log('terminamos na fase: ', fase3);
  } catch (e) {
    console.log(e);
  }
}
executa();


/* As promises tem 4 estados.
  Pendente (pending): Ta sendo executada mais ainda não retornou o valor
  fullFilder: Como se ela estivesse resolvida
  Rejeitada (reject): Quando da um erro e ela é rejeitada;
  allSettled: Retorna uma promessa que é resolvida após todas as promessas dadas serem resolvidas ou rejeitadas;
*/
