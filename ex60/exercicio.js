// retornando o maior de dois numeros. Actual

const num01 = 60;
const num02 = 80;

/* const maiorQue = (num01, num02) => {
  if (num01 == num02) return `Igual ambos ${num01}`;
  return num01 > num02 ? `${num01} maior que ${num02}` : `${num02} maior que ${num01}`;
}

const result = maiorQue(num01, num02);
console.log(result); */

/* const modoPaisagem = (altura, largura) => largura > altura ? 'Modo Paisagem' : 'Modo Normal';
const result = modoPaisagem(num01, num02);
console.log(result); */

const numeroTest = 9;

/* const divPorTres = (item) => item % 3 === 0 ? 'Fizz' : '';
const divPorCinco = (item) => item % 5 === 0 ? 'Buzz' : '';
const divTreCinco = (item) => item % 3 === 0 && item % 5 === 0 ? 'FizzBuzz' : item;

const exibirResult = (item) => {
  if (typeof (item) == 'number') {
    return `
      O numero ${item} ${divPorTres(item) === '' ? 'não é' : 'é'} divisivel por 3, ${divPorTres(item)}.
      O numero ${item} ${divPorCinco(item) === '' ? 'não é' : 'é'} divisivel por 5, ${divPorCinco(item)}.
      O numero ${item} ${divPorCinco(item) === '' || divPorTres(item) === '' ? 'não é' : 'é'} divisivel por 3 e 5, ${divTreCinco(item)}.
    `;
  }

  return 'Não é um número';
}

const result = exibirResult(numeroTest);
console.log(result);
 */

const fizzBuzz = (numero) => {
  

}