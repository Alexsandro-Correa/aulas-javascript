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