// IIFE -> Immediately Invoked Function Expression
// 
(function (idade, peso, altura) {
  const sobrenome = 'Cavalcanti';

  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Fernando'));
  }

  // falaNome();
  // console.log(`Estou com ${idade} anos, tenho ${peso}kgs com ${altura} de altura`);

})(27, 95, 1.70);

// Factory Function

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    fala(assunto) {
      return `${nome} esta falando sobre ${assunto}`;
    },
    altura,
    peso,
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Fernando', 'Cavalcanti', 1.70, 95);
// console.log(p1.fala('Stand Up'));
// console.log(p1.imc);
p1.nomeCompleto = 'Marcelino Pão Vinho';
console.log(p1.nomeCompleto);
