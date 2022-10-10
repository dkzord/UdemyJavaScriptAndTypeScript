const pessoas = [
  { id: 3, nome: 'Fernando' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Jesus' },
];

/*const novaPessoa = {};

 for (const { id, nome } of pessoas) {
  console.log(id, nome);
} */

/* for (const pessoa of pessoas) {
  const { id } = pessoa;
  novaPessoa[id] = { ...pessoa };
} */

const novasPessoas = new Map();

/* for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa })
} */

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
}

console.log(novasPessoas);