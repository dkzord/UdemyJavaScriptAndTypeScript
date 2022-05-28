const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Essa função mexe no array original como pop e push;
// Ela também returno o item removido como um array;
// nomes.splice(indice, delete, element1, element2, element3);
// const removidos = nomes.splice(4, 1);
const adicionado = nomes.splice(3, 0, 'Luiz');
// pop() - Tira o ultimo da fila
const simulandoPop = nomes.splice(-1, 1);
// shift() - Tira o primeiro da fila
const simulandoShift = nomes.splice(0, 1);
// Push
nomes.splice(nomes.length, 0, 'Fernando');
// unshift() - Adiciona no começo do Array;
nomes.splice(0, 0, 'Cavalcanti');

console.log(nomes);