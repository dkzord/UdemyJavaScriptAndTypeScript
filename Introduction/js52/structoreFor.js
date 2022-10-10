const item = document.getElementsByClassName('container');

const elementos = [
  { tag: 'p', texto: 'Frase 01' },
  { tag: 'div', texto: 'Frase 02' },
  { tag: 'footer', texto: 'Frase 03' },
  { tag: 'section', texto: 'Frase 04' },
];

const criarTags = (item) => {
  const criarTag = document.createElement(item);
  return criarTag;
}

const imprimirTags = (item) => {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  for (i = 0; i < item.length; i++) {
    const criouItem = criarTags(item[i].tag);
    criouItem.innerHTML = item[i].texto;

    criouItem.classList.add('formatText')

    this.result.appendChild(criouItem);
  }
}

imprimirTags(elementos);

