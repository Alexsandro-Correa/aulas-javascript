// O que é DOM
// DOM - Document Object Model

//Formas de acessar dados do html

/*

document.getElementsByTagName("h1");
document.getElementById("teste");
document.getElementsByClassName("botao");
document.querySelector("#teste");
document.querySelector(".botao");
document.querySelectorAll("li"); // usando o all,ele pega todos os li
document.querySelectorAll("#teste ul li");
//querySelectorAll sempre vai retornar um array

*/

//---------------------------------------------------

//Eventos de Clique

/*
function clicked(){
    alert('Botão clicado!');
}

let botao = document.querySelector('.botao');

botao.addEventListener("click", ()=>{
    clicked();
});
*/
//---------------------------------------------------

// Manipulando Elementos

/*
function clicked(){
    alert('Botão clicado!');
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');
   
    ul.innerHTML += "<li>Item Alterado</li>";
}
*/

/*
function clicked(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');

    let newLi = document.createElement("li");
    newLi.innerText = "item Adicionado";

    ul.appendChild(newLi);

    ul.prepend(newLi);

    ul.children[0].append("(Alterado)");
}
*/

/*
function clicked() {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  const newButton = document.createElement("button");
  newButton.innerHTML = "Botão";

  let newUl = document.createElement("ul");

  for (let i = 0; i < 5; i++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = "Item add " + (i+1);
    newUl.append(newLi);
  }
  
  ul.after(newUl);

  ul.before(newButton);

  // After - Depois
  // Before - Antes
}
*/

//---------------------------------------------------

// Manipulando Atributos

/*

function clicked(){
    const input = document.querySelector('input');

    // .hasAtributte() - usado para saber se tem o atributo passado no parâmetro
    // .getAtributte()- usado para pegar o atributo
    // .setAtributte() - usado para definir o atributo

    const botao = document.querySelector('.botao');

    if(input.hasAttribute('placeholder')){
        console.log('Tem placeholder sim!');
    }else{
        console.log('Não tem placeholder.');
    }

    if(input.getAttribute('type') === 'text'){
         input.setAttribute('type', 'password');
         botao.innerText = "Mostrar Senha";
    }else{
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar Senha";
    }

   
    
    console.log(input.getAttribute('name'));

}
*/

// Manipulando o CSS

/*

function clicked(){
    const li = document.querySelector('li');

    li.style.backgroundColor = "blue";
    li.style.fontSize = "20px";
    li.style.color = "white";
}

*/

//---------------------------------------------------

// Trabalhando com Classes

/*

function clicked() {
  const button = document.querySelector("button");

  console.log(button.classList);

  //if (button.classList.contains("azul")) {
  //  button.classList.add("verde");
  //  button.classList.remove("azul");
  // }else{
  //  button.classList.remove("verde");
  //  button.classList.add("azul");
  // }

  if (button.classList.contains("azul")) {
    button.classList.replace("azul", "verde");
  } else {
    button.classList.replace("verde", "azul");
  }

  button.classList.toggle("azul");
}
*/

//---------------------------------------------------

// Eventos do teclado

/*

function pressed(){
  console.log("Apertou");
}

function hold(){

  console.log("Segurou");
}

function released(event){
  // console.log("Soltou");
  // console.log(event.code); // .code - retorna a tecla clicada de forma mais específica - KeyA
  // console.log(event.key); // .key - retorna a tecla clicada na forma que foi clicada - a
  // console.log(event.shiftKey); // shift - passar o valor retorna true ou false, dependendo da verificação
  // console.log(event.ctrlKey); // - ctrl
  // console.log(event.altKey); // - alt

  // if(event.key === "a"){
  //  console.log("a clicado");
  // }

  // if(event.code === "KeyA"){
  //  console.log("Teste Funcionando");
  // }
}

// keydown - evento que ativa quando clica em alguma tecla
// keypress - evento que ativa enquanto segura uma tecla
// keyup - evento que ativa quando solta uma tecla

// document.addEventListener('keyup', released); // - usando apenas document ele engloba a página toda

const input = document.querySelector('input');
input.addEventListener('keyup', released);

*/

//---------------------------------------------------

// Exercício -Preencher lista ao clicar no enter depois de digitar no input

// Elementos
const input = document.querySelector("input");
const list = document.querySelector("ul");

//Funções
function handleKeyUp(event){
  if(event.key === "Enter"){
    // input.value vai pegar o valor do input
   // list.innerHTML += '<li>' + input.value + '</li>' - Essa não é a melhor forma pois ele 
   // renderiza tudo denovo após adicionar

   // Adicionar o elemento LI na lista
   const newLi = document.createElement('li'); // Cria o elemento
   newLi.innerHTML = input.value; // Pega o valor do input para passar para o newLi
   list.appendChild(newLi); // Adiciona o newLi a list

   // Limpar o campo de texto
   input.value = ""

  }
}


// Eventos
input.addEventListener('keyup', handleKeyUp);