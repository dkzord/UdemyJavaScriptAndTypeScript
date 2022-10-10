const numero = Number(prompt("Digire numero"));

const numeroTitulo = document.getElementById('numero-titulo');
const text = document.getElementById('text');

numeroTitulo.innerHTML = numero;
text.innerHTML += `<p>Seu número -2 é : ${numero - 2}</p>`;
text.innerHTML += `<p>${numero} -2 é : ${numero ** 0.5}</p>`;
text.innerHTML += `<p>${numero} é inteiro : ${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p>Para baixo é : ${Math.floor(numero)}</p>`;
text.innerHTML += `<p>Para cima é : ${Math.ceil(numero)}</p>`;
text.innerHTML += `<p>Com duas casas é : ${numero.toFixed(2)}</p>`;
