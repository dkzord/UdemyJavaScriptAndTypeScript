const item = document.getElementsByClassName('container');
const date = new Date();

const criarParagrafo = () => {
  const p = document.createElement('p');
  return p;
}

const formatZeroBefore = (item) => {
  const result = item < 10 ? `0${item}` : item;
  return result;
}

const formatWeek = (item) => {
  if (item == 0) return 'Domingo';
  if (item == 1) return 'Segunda';
  if (item == 2) return 'Terça';
  if (item == 3) return 'Quarta';
  if (item == 4) return 'Quinta';
  if (item == 5) return 'Sexta';
  if (item == 6) return 'Sábado';
}

const formtData = (item) => {
  const resultData = `
    Hoje é ${formatWeek(item.getDay())},
    ${formatZeroBefore(item.getDate())}/${formatZeroBefore(item.getMonth())}/${formatZeroBefore(item.getFullYear())} 
    as ${formatZeroBefore(item.getHours())}:${formatZeroBefore(item.getMinutes())}:${formatZeroBefore(item.getSeconds())}`;
  return resultData;
}

const exibeData = (item) => {
  const result = document.querySelector('#resultado');
  result.innerHTML = '';

  const p = criarParagrafo();
  p.classList.add('formatData');
  const dataFormatada = formtData(item);

  p.innerHTML = dataFormatada;
  result.appendChild(p);
}

exibeData(date)
