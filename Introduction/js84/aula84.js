// Filter, map, reduce -> Funções mais importantes para array;
// Filter so disnponivel dentro dos array mas não edita o array original
// Vai sempre retorna um array com a mesm quantidade de elementos ou menos

// Retorne os números maiores que 10;
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let novoArray = [];

for (let valor of numeros) {
  if (valor >= 10) {
    novoArray.push(valor);
  }
}

// console.log(novoArray);

//já recebe diretamente o valor, indice, array completo;
function callbackFilter(valor) {
  return valor >= 10;
}

const arrayFiltrados = numeros.filter((valor) => valor >= 10);
// console.log(arrayFiltrados);


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const arrayNomesCinco = pessoas.filter((obj) => obj.nome.length >= 5);
// console.log(arrayNomesCinco);

const arrayMaiorIdade = pessoas.filter((obj) => obj.idade >= 50);
// console.log(arrayMaiorIdade);

const arrayTerminadoComA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
// console.log(arrayTerminadoComA);



const myList = [{ name: "Aji", family: "Ziansi" }, { name: "Alex", family: "ortega" }, { name: "Amandi", family: "Sedirini" }];
const newlist = myList.filter((obj) => obj.name.startsWith('A') && obj.name.endsWith('i'));

console.log(newlist);
