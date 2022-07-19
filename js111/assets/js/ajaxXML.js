// XMLHttpRequest
/* const request = obj => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
}; */

// Promise
/* const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
}; */

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
})

/*function carregaPagina(el) {
  const href = el.getAttribute('href');

    //Modo com Ajax
    const objConfig = {
      method: 'GET',
      url: href,
      success(response) {
        carregaResultado(response);
      },
      error(errorText) {
        console.log(errorText);
      }
    }; 
  request(objConfig);

  // Modo com promises
    const objConfig = {
    method: 'GET',
    url: href,
  };

  request(objConfig).then(response => {
    carregaResultado(response);
  }).catch(error => console.error(error));
}*/

// Para o modo promise
/* async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href,
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (err) {
    console.error(err);
  }
} */

// Fetch
async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    if (response.status >= 300 || response.status < 200) throw new Error('Deu erro');
    const html = await response.text();
    carregaResultado(html);
  } catch (err) {
    console.error(err);
  }

  /* fetch(href)
    .then(response => {
      if (response.status >= 300 || response.status < 200) throw new Error('Deu erro');
      return response.text();
    })
    .then(html => carregaResultado(html))
    .catch(err => console.error(err)); */


}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}


/* 
fetch('pagina1.html')
  .then(resposta => {
    if (resposta.status !== 200) throw new Error('Nosso erro!');
    return resposta.text();
  })
  .then(html => {
    console.log(html);
  })
  .catch(err => console.error(err)) */