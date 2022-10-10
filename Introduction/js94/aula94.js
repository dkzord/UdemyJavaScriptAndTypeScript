// Estudo de herança
// Camiseta e Caneca como exemplo.
// Cor, materaial, aumento de preço.
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (valor) {
  this.preco += valor;
}
Produto.prototype.desconto = function (valor) {
  this.preco -= valor;
}

const p1 = new Produto('Camisa', 60);
p1.aumento(20);
// console.log(p1);

// Função construtora
function Camisa(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camisa.prototype = Object.create(Produto.prototype);

Camisa.prototype.aumento = function (percentual) {
  this.preco += (this.preco * (percentual / 100));
}

const camiseta = new Camisa('Regata', 120, 'Vermelha');
// camiseta.aumento(20);
// console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (value) {
      if (typeof value !== 'number') return;
      estoque = value;
    }
  })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function (percentual) {
  this.preco += (this.preco * (percentual / 100));
}
Caneca.prototype.desconto = function (percentual) {
  this.preco -= (this.preco * (percentual / 100));
}


const c01 = new Caneca('Dart', 50, 'Porcelana', 5);
// c01.aumento(20);
c01.desconto(10);
console.log(c01);







