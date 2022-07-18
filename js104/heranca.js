class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já esta ligado");
      return;
    }

    return this.ligado = !this.ligado;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já esta desligado");
      return;
    }

    return this.ligado = !this.ligado;
  }
}

// const ele1 = new DispositivoEletronico('som');

class SmartPhone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const xiaomi = new SmartPhone('Xiaomi', 'Azul', 'Mi13');
xiaomi.ligar();
xiaomi.ligar();
xiaomi.desligar();
xiaomi.desligar();

console.log(xiaomi);
