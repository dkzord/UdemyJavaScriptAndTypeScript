// Validação de CPF
// CPF de gerador -> 705.484.450-52 / 070.987.720-03

// tratar como string porque tem cpf começando com 0;
let cpf = '111.111.111-11';
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

