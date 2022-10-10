const elementos = [
  { tag: 'p', texto: 'Frase 01' },
  { tag: 'div', texto: 'Frase 02' },
  { tag: 'footer', texto: 'Frase 03' },
  { tag: 'section', texto: 'Frase 04' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag)
  /* tagCriada.innerHTML = texto; */
  /* tagCriada.innerText = texto */
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);