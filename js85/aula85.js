// Function map -> altera valores do array;
// Objetos, Arrays e função não são copiados (geralmente);
// Interando sobre os objetos originais e interando em cima deles.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const newNumber = numeros.map((value) => value * 2);
// console.log(newNumber);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoas
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

const nomes = pessoas.map((obj) => obj.nome);
const idades01 = pessoas.map((obj) => { delete obj.nome; return obj });
// const idades02 = pessoas.map((obj) => { return { idade: obj.idade } });
// Virou uma expressão;
const idades02 = pessoas.map((obj) => ({ idade: obj.idade }));
// const chaveId = pessoas.map((obj, indice) => {
//   obj.id = indice + 1;
//   return obj;
// });
const chaveId = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});

console.log(chaveId);
console.log(pessoas);

