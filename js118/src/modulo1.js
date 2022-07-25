export const nome = 'Fernando';
export const sobrenome = 'Cavalcanti';
export const idade = 27;

export function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}