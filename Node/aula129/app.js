const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'texte.json');
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');

// const pessoas = [
//   { nome: 'Luiza' },
//   { nome: 'pedro' },
//   { nome: 'Paulo' },
//   { nome: 'Amanda' },
//   { nome: 'Luiza' },
//   { nome: 'Luiza' }
// ];
// const json = JSON.stringify(pessoas, ' ', 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val.nome));
}

leArquivo(caminhoArquivo);