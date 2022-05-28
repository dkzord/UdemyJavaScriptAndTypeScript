const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// Rest operator -> Faz uma copia de todo conteúdo de nomes sem alterar o de ambos.
const novo = [...nomes];


novo.pop();
// console.log(nomes);
// console.log(novo);
// remove final
// const removido = nomes.pop();
// remove começo
// const removido = nomes.shift();
// console.log(removido);
// console.log(nomes.length);

// Adiciona no final da fila
// nomes.push('Pedro');
// nomes.push('Alex');

// Adiciona no começo da fila
// nomes.unshift('Pedro');
// nomes.unshift('Alex');

// Slice acaba "fatiando" o meu Array -> Pega indice 1 a indice 2.
// const novoFatiado = nomes.slice(1, -1);

// console.log(novoFatiado);



/* 
  Convertendo string em um array;
*/

/* const nomeString = 'Fernando Cavalcanti';
const novoNomeString = nomeString.split(' '); */
const nomeArray = ['Fernando', 'Cavalcanti', 'Lima'];
const nomeArrayString = nomeArray.join(' ');
console.log(nomeArrayString);


// Fim da revisão.