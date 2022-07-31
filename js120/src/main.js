import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function () {
  const gera = new GeraCPF();
  console.log('teste note');
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCPF();
})();