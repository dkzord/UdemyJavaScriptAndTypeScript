const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

const limpaInput = () => {
  inputTarefa.value = '';
  inputTarefa.focus();
}

const criaLi = () => {
  const li = document.createElement('li');
  return li;
}

const criaBotaoApagar = (li) => {
  li.innerText += ' ';
  const btn = document.createElement('button');
  btn.innerText = 'Apagar';
  btn.setAttribute('class', 'apagar');
  li.appendChild(btn);
}

const criaTarefas = (description) => {
  const li = criaLi();
  li.innerText = description;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', () => {
  if (!inputTarefa.value) return;
  criaTarefas(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefas(inputTarefa.value);
  }
});

document.addEventListener('click', (event) => {
  const el = event.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
})

const adicionaTarefasSalvas = () => {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefas(tarefa);
  }
}
adicionaTarefasSalvas();
