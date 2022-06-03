// Validação de CPF
// CPF de gerador -> 705.484.450-52 / 070.987.720-03

// tratar como string porque tem cpf começando com 0;
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);

function verifica(valor) {
  let total = 11 - (valor % 11);
  if (total > 9) return 0;
  return total;
}

function verficaDigito(valor) {
  if (valor > 9) {
    return 0;
  }
  return valor;
}

function verficaRepeticao(cpf) {
  const cpfInvalido = [
    '99999999999',
    '88888888888',
    '77777777777',
    '66666666666',
    '55555555555',
    '44444444444',
    '33333333333',
    '22222222222',
    '11111111111',
    '00000000000'
  ]

  // console.log(cpfInvalido.length);
  for (let i = 0; i < cpfInvalido.length; i++) {
    if (cpfInvalido[i] == cpf) {
      return false;
    }
  }

  return true;
}

function primeiroDigito(array) {
  let total = 0;
  for (let i = 10; i >= 2; i--) {
    total = total + (array[10 - i] * i);
  }

  if (verifica(total) == verficaDigito(array[9])) {
    return true;
  }

  return false;
}

function segundoDigito(array) {
  let total = 0;
  for (let i = 11; i >= 2; i--) {
    total = total + (array[11 - i] * i);
  }

  if (verifica(total) == verficaDigito(array[10])) {
    return true;
  }

  return false;
}

function validaCPF(array) {
  const cpf = array.toString().replace(/[^0-9]/g, '')
  if (verficaRepeticao(cpf) && primeiroDigito(array) && segundoDigito(array)) {
    console.log('CPF Valido');
  } else {
    console.log('CPF Inválido');
  }
}
// validaCPF(cpfArray);




// Solução da aula.

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);

  return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
}

const cpf2 = new ValidaCPF("111.111.111-11");
console.log(cpf2.valida());
// CPF de gerador -> 705.484.450-52 / 070.987.720-03