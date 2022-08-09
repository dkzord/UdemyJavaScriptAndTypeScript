// // const mode1 = require('./mod1');
// const { nome, sobrenome, falaNome } = require('./mod1');

// // const falaNome = mode1.falaNome;

// console.log(falaNome);
// console.log(nome, sobrenome);


class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;