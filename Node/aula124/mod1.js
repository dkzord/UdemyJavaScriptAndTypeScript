// const nome = 'Fernando';
// const sobrenome = 'Cavalcanti';

// const falaNome = () => nome + ' ' + sobrenome

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Teste do node';

// console.log(exports);

const { Pessoa } = require('./app');

const pessoa = new Pessoa('Fernando Cavalcanti');
console.log(pessoa);
