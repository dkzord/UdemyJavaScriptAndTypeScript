// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

  // Onde no caso this; objeto; 
  Object.defineProperty(this, 'estoque', {
    enumerable: true, /* Mostra a chave */
    value: estoque, /* Valor da chave */
    writable: false, /* pode ser alterada ou não */
    configurable: false /* pode apagar/editar a chave */
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, /* Mostra a chave */
      value: nome, /* Valor da chave */
      writable: true, /* pode ser alterada ou não */
      configurable: true /* pode apagar/editar a chave */
    },
    preco: {
      enumerable: true, /* Mostra a chave */
      value: preco, /* Valor da chave */
      writable: true, /* pode ser alterada ou não */
      configurable: true /* pode apagar/editar a chave */
    }
  });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.nome = 'Jeans';
// p1.estoque = 500;
// console.log(p1);
// console.log(Object.keys(p1));

function Produto01(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoquePrivado;
    },
    set: function (value) {
      if (typeof value !== 'number') {
        throw new TypeError('Não é um numero!');
      }
      estoquePrivado = value;
    }
  });
}

const p2 = new Produto01('Jeans', 30, 5);
// console.log(p2);
p2.estoque = 150;
// console.log(p2.estoque);


// Factory function
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    }
  };
}

const p3 = criaProduto('Camiseta');
console.log(p3);

