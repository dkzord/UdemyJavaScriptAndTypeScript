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

// 