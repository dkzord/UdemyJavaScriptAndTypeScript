// Let tem escopo de bloco { ... bloco }
// Var tem escopo de função 
// Via array
/* 
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(numeros[1][1]);
 */

// Via Objetvos
const pessoas = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição por desestruturação
const { nome = 'Não existe!', sobrenome, idade } = pessoas;

console.log(nome, sobrenome, idade);

