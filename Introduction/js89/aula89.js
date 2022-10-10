const pessoa = {
  nome: 'Fernando',
  sobrenome: 'Cavalcanti'
}

const chave = 'sobrenome'
// console.log(pessoa[chave]);

// new Array(), contrutor de array.
const pessoa01 = new Array();
pessoa01.nome = 'Fernando';
pessoa01.sobrenome = 'Cavalcanti';
pessoa01.idade = 27;
pessoa01.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}
pessoa01.falarNome = function () { return `prazer meu nome é ${this.nome}! sou de ${this.getDataNascimento()}`; };

// console.log(pessoa01.falarNome());

/* for (let chave in pessoa01) {
  console.log(chave);
} */

// Factory Function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Fernando', 'Cavalcanti');
// console.log(p1.nomeCompleto);

// Constructor function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p2 = new Pessoa('Fernando', 'Cavalcanti');
console.log(p2);




