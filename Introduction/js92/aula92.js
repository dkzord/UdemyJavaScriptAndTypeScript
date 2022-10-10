const objA = {
  chaveA: 'A'
};

const objB = {
  chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

// console.log(objC.chaveB);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(10)
p1.aumento(20);
console.log(p1.preco);

// Literal
const p2 = {
  nome: 'Caneca',
  preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
// console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.preco = 150;
p3.desconto(20);
console.log(p3);

