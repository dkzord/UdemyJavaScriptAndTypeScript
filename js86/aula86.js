// conteúdo sobre reduce -> Evite usar, use map ou filter. Se for para reduzir usa reduce;

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne um array com os pares (Filter) -> se trocar 
// (valor % 2 === 0) por (valor % 2 !== 0) retorna os impares;

// acumulador, valor, indice e array
const total = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

// console.log(total);

// Retorne um array com o dobro dos valores (Map);
const double = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

// console.log(double);


// Retorne a pessoa mais velha.
const pessoas = [
  { nome: 'Luiz', idade: 42 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 72 },
  { nome: 'Wallace', idade: 47 }
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  console.log(acumulador.idade);
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
