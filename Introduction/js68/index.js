// Apenas em function tem arguments que sustenta todos os argumentos enviados
function funcao() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }

  console.log(total);
}

// funcao(1, 2, 3, 9, 4, 5, 7);

// rest operator - Sempre tem que ser o ultimo parametro da função
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;

  }

  console.log(acumulador);
}

// conta('-', 0, 20, 30, 40, 50);


// Retorno de uma função.
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo'));

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
