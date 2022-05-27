// Função construtora constroi objetos -> Precisa iniciar com letra maiúscula (usa a palavra New)
// Função Fabric fabrica os objetos    -> 

// Construtora
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Fernando', 'Cavalcanti');
console.log(p1);
