const _velocidade = Symbol('velocidade');
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const ferrari = new Carro('Ferrari');
ferrari.acelerar();

for (let i = 0; i < 200; i++) {
  ferrari.acelerar();
}

// console.log(ferrari.velocidade);

class Pessoa {

  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }

}

const p1 = new Pessoa('Fernando', 'Cavalcanti');
p1.nomeCompleto = 'Fernando Cavalcanti Medeiros';
console.log(p1.nomeCompleto);
