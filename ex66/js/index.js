const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

const mostrarHora = (segundos) => {
  let data = new Date(segundos * 1000);

  return data.toLocaleTimeString(
    'pt-BR',
    {
      hour12: false,
      timeZone: 'GMT',
    }
  );
}

const iniciaRelogio = () => {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = mostrarHora(segundos);
  }, 1000);
}

const setTimeFuncao = () => {
  segundos = 0;
  relogio.innerHTML = mostrarHora(segundos);
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    setTimeFuncao();
    clearInterval(timer);
  } else if (el.classList.contains('pausar')) {
    relogio.classList.add('pausado')
    clearInterval(timer);
  } else if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }
});

/* iniciar.addEventListener('click', (event) => {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciaRelogio();
}); */

/* pausar.addEventListener('click', (event) => {
  relogio.classList.add('pausado')
  clearInterval(timer);
}); */

/* zerar.addEventListener('click', (event) => {
  relogio.classList.remove('pausado');
  setTimeFuncao();
  clearInterval(timer);
}); */
