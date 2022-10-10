function criaPessoa(nome, sobrenome) {
  const falar = {
    falar() {
      console.log(`${this.nome} está falando`);
    }
  }

  const comer = {
    comer() {
      console.log(`${this.nome} está comendo`);
    }
  }

  const beber = {
    beber() {
      console.log(`${this.nome} está bebendo.`);
    }
  }

  const pessoaPrototype = { ...falar, ...beber, ...comer }

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = new criaPessoa('Fernando', 'Cavalcanti');
const p2 = new criaPessoa('Fernando', 'Medeiros');
console.log(p1.falar());