// Requisições

//---------------------------------------------------

// Síncrono e Assíncrono

// Síncrono - Executa a linha e permanece nela até terminar a execução
/*
let name ='Alex'
let lastName = 'Corrêa'
let fullName = name + lastName;
*/
// Assíncrono - Executa todas as linhas ao mesmo tempo,então
// Se uma linha dependia da outra para funcionar , dará erro, já que as
// linhas são executadas ao mesmo tempo

//---------------------------------------------------

/*
Como a Web Funciona? (Requisição e Resposta)

 Request = Requisição
   -> Cabeçalhos / Headers
   -> Corpo / Body
 
 Response = Resposta
   -> Cabeçalhos / Headers
   -> Corpo / Body

   */
//---------------------------------------------------

// Como funciona uma API?

/*
API - Application Programming Interface

JSON =  Javascript Object Notation - Padrão de Comunicação Atual

*/

//---------------------------------------------------

// O que é um Callback?

// call back = ligar de volta

/*
function clickCallback (){
    alert('Clicou!');
}

document.querySelector("#botao").addEventListener("click", clickCallback);
*/

//---------------------------------------------------

// Requisição na Prática
/*

// https://jsonplaceholder.typicode.com/posts

function clicked(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response)=>{
    return response.json();
   })
   .then((json)=>{
        alert(`Título do primeiro post: ${json[0].title}`)
        //console.log(json[0].title);
   })
}

document.querySelector('#post').addEventListener('click', clicked);
*/

//---------------------------------------------------

// Entendendo Promise

// Promise = Promessa > Algo que vai acontecer no futuro
// tudo que tem Promisse é uma função assíncrona

/*

function clicked() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      alert(`Título do primeiro post: ${json[0].title}`); // Só é executado depois que tiver as reposta
      //console.log(json[0].title);
    });

    alert('opa,clicou'); // Esse código executa antes pq ele é síncrono, enquanto o fetch acima é assíncrono
}

function sum(x, y) {
  return x + y;
}

document.querySelector("#post").addEventListener("click", clicked);

*/

//---------------------------------------------------

// Erros na Promise
/*
function clicked() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        alert(`Título do primeiro post: ${json[0].title}`); // Só é executado depois que tiver as reposta
        //console.log(json[0].title);
      }).catch((error)=>{      // catch - é executado quando algo da errado
        console.log(`Erro: ${error}`);
      }).finally(()=>{ // finally - é exeutado por último (pouco utilizado)
        alert('Requisição Finalizada');
      })
  
  }
  
  document.querySelector("#post").addEventListener("click", clicked);
  */

//---------------------------------------------------

// Tipos de Status de um Requisição

// No fetch, para ver o status basta dar um response.status
// (response) no caso é o parametro do then, não necessariamente se chama response

/*
  https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
*/

//---------------------------------------------------

// Métodos de Envio de Requisição

/*

// GET - pega informações
// POST - inseri informações
// PUT - atualiza informações
// DELETE - deleta informações

function clicked() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        alert(`Título do primeiro post: ${json[0].title}`);
      }).catch((error)=>{      // catch - é executado quando algo da errado
        console.log(`Erro: ${error}`);
      });
  }

  function inserir (){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de Teste',
            body: 'Corpo de Teste',
            userId: 2
        })
    }).then((response)=>{
        return response.json();
    }).then((json)=>{
        console.log(json);
    })
  }
  
  document.querySelector("#post").addEventListener("click", clicked);
  document.querySelector("#inserir").addEventListener("click", inserir);

  */

//---------------------------------------------------

// Promises com async/await

/*

// await = esperar

// let clicked = async ()=> {}; // Exemplo do uso de async em arrow function

// Uso de async em function padrão
async function clicked() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();
  alert(`Título do primeiro post: ${json[0].title}`);

  alert("Clicou");
}

async function inserir() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Titulo de Teste",
      body: "Corpo de Teste",
      userId: 2,
    }),
  });

  let json = await response.json();
  console.log(json);
}

document.querySelector("#post").addEventListener("click", clicked);
document.querySelector("#inserir").addEventListener("click", inserir);

*/

//---------------------------------------------------

// Projeto : Blog do JSONPlaceholder

//---------------------------------------------------

