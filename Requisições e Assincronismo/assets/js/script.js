// Requisições

//---------------------------------------------------

// JSON - Javascript Object Notation

// Objeto JSON

/*

let person = {
    name: 'Alex',
    age: 26
};

// Forma de acessar o que tem dentro do objeto
person.name;
persom.age;

*/

//---------------------------------------------------

// JSON.parse

// Pega a string e transforma em JSON

/*
let person = JSON.parse('{"name":"Alex"}');

console.log(person);

*/

//---------------------------------------------------

// JSON.strigify

// Pega o JSON e transforma em string

/*

let person = {
    name: 'Alex',
    age: 26
}
console.log(person);

console.log(JSON.stringify(person));

*/

//---------------------------------------------------

// Código síncrono e assíncrono

// Código Síncrono
let name = "Alex";
let lastName = "Corrêa";
let fullName = name + " " + lastName;

// Código assíncrono
// Executa todo o código ao mesmo tempo, se tiver algo que faça uma requisição
// externa e que dependa de uma resposta, ele vai executar por último

//---------------------------------------------------

// Callbacks

/*

// É uma função que você cria e executa quando tem o retorno de uma requisição,
// ou seja, é uma função que você define para ser chamada em resposta a algum evento.

function alerting (){
    alert('Opa')
}

setTimeout(alerting,2000);

*/

//---------------------------------------------------

// Promises - Promessa

/*

function getTemperature() {
  return new Promise(function (resolve, reject) {
    console.log("Pegando temperatura...");

    setTimeout(function () {
      resolve("40 na sombra!");
    }, 2000);
  });
}

// Usando a Promise
//Código antes
let temp = getTemperature();

// Código durante
temp
  .then(function (result) {
    console.log("Temparatura: " + result);
  })
  .catch(function (error) {
    console.log("Algo deu errado: " + error);
  });
// Código depois

*/

//---------------------------------------------------

// Fetch

/*

function loadPosts() {
  document.getElementById("posts").innerHTML = "Carregando...";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      setupBlog(json);
    })
    .catch(function (error) {
      console.log("Algo deu errado: " + error);
    });
}

function setupBlog(list) {
  let html = "";

  for (let i in list) {
    html += "<h3>" + list[i].title + "</h3>";
    html += list[i].body + "</br>";
    html += "<hr/>";
  }

  document.getElementById("posts").innerHTML = html;
}

*/

//---------------------------------------------------

// Async e Await

/*

async function loadPosts() {
    document.getElementById("posts").innerHTML = "Carregando...";

    let req = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await req.json();
    setupBlog(json);
  }
  
  function setupBlog(list) {
    let html = "";
  
    for (let i in list) {
      html += "<h3>" + list[i].title + "</h3>";
      html += list[i].body + "</br>";
      html += "<hr/>";
    }
  
    document.getElementById("posts").innerHTML = html;
  }
*/

//---------------------------------------------------

// Fetch com Post

/*

async function insertPost(){
    document.getElementById("posts").innerHTML = "Carregando...";

    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "Título",
            body: 'Corpo',
            userId: 4
        }),
        headers: {
            'Content-Type' : 'application/json',
        }
    });
    let json = await req.json();

    console.log(json);
}
*/

//---------------------------------------------------

// Uploads de arquivo com JS

/*

async function send() {
    let archive = document.getElementById('archive').files[0];

    let body = new FormData();
    body.append('title', 'bla bla');
    body.append('arquivo', archive);

    let req = await fetch('https://www.meusite.com',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
    })

}

*/

//---------------------------------------------------

// Thumbnail com JS - Mostrar Imagem na Tela

/*

function show() {
    let image = document.getElementById('image').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.width = 200;

    document.getElementById("area").appendChild(img);
}

*/

//---------------------------------------------------

// Thumbnails com FileReader

function show(){
    let reader = new FileReader();
    let image = document.getElementById('image').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(image);
}