// Estudo sobre polimorfismo
// Classe = função estrutural

//Super Class ou Classe mãe
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Saldo Insuficiente!");
    this.verSaldo();
    return
  };

  this.saldo -= valor;
  this.verSaldo();
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function () {
  console.log(`Ag/C: ${this.agencia}/${this.conta} | ` +
    `Saldo: ${this.saldo.toFixed(2)}`
  );
}

const conta01 = new Conta(11, 23, 150);
// conta01.verSaldo();
// conta01.depositar(50);
// conta01.sacar(25);
// conta01.sacar(225);

// Herança
function ContaCorrente(agencia, conta, salvo, limite) {
  Conta.call(this, agencia, conta, salvo);
  this.limite = limite;
}

// Link dos prototypes
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Sobreescrevendo o metodo sacar.
ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log("Saldo Insuficiente!");
    this.verSaldo();
    return
  };

  this.saldo -= valor;
  this.verSaldo();
}

const cc = new ContaCorrente(12, 22, 0, 100);
// cc.depositar(10);
// cc.sacar(90);
// cc.sacar(21);


// Herança
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

// Link dos prototypes
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaPoupanca(13, 25, 0);
cp.depositar(10);
cp.sacar(90);
cp.sacar(21);