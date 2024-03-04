//---------------------------------------------------

// Declaração e Uso de Funções
/*
function gravity() {
    console.log("A gravidade do planeta é:");
    console.log(9.8);
}

gravity();
*/

//---------------------------------------------------

// Funções com parâmetros

/*
function sum (n1,n2) {
    let result = n1 + n2;
    console.log("Resultado:",result);
}

sum(5, 7);

function completeName (name, surname){
    console.log(`${name} ${surname}` );
}

completeName("Alexsandro", "Corrêa");
completeName("João", "Silva");
*/

//---------------------------------------------------

// Retorno da Função

/*
function completeName (name, surname) {
    return `${name}, ${surname}`;
}

let complete = completeName("Alexsandro", "Corrêa");
console.log("Completo:",complete);
*/

//---------------------------------------------------

// Função com retorno condicional

/*
function ofAge (age){
    if(age >= 18){
        return true;
    }else {
        return false;
    }
}

let age = 18;

let verification = ofAge(age);
console.log(verification);

if(verification) {
    console.log("É maior de idade!");
}else {
    console.log("É menor de idade!");
}
*/

//---------------------------------------------------

// Exercício de Funções Porcentagem

/*

function calcPct(x,y){
    let result = (y/x) *100;
    return result;
}

let x = 30;
let y = 15;
let pct = calcPct(x,y);
console.log(`${pct}% de ${x} é ${y}`);

*/

// Exercício de Funções - Calcule o Preço do Imóvel

/*

function calcImmobile(footage,bedrooms){
    let m2 = 3000;
    let price = 0;

    switch(bedrooms){
        case 1:
        default:
            price = footage * m2;
        break;

        case 2:
            price = footage *(m2 * 1.2);
        break;

        case 3:
            price = footage * (m2 * 1.5);
        break;
    }

    return price;

}

let footage = 123;
let bedrooms = 2;
let price = calcImmobile(footage,bedrooms);
console.log(`A casa custa R$ ${price}`);
*/

//---------------------------------------------------

// Exercício de Funções - Validação de Usuário e Senha

/*
function validate(user,password){
    if(user === "pedro" && password === "123"){
        return true;
    }else {
        return false;
    }
}

let user = "alex";
let password = "1234";
let validation = validate(user,password);
if (validation){
    console.log("Acesso Concedido!");
}else{
    console.log("Acesso Negado!");
}
*/

//---------------------------------------------------

// Arrow Function

/*

function sum (x,y){
    return x + y;
}


const sum = (x,y)=> {  // Arrow Function
    return x + y;
}


const sum = (x,y) => x+ y; // Arrow Function resumido (Só funciona em função de uma linha de código apenas)

console.log(sum(10,5));


function surname(sur) {
    return "Alexsandro" + sur;
}

const surname = sur => "Alexsandro " + sur; 

console.log(surname("Corrêa"));

*/

//---------------------------------------------------

// Variáveis dentro de Funções

/*

// Não tem como acessar diretamente as variáveis criadas dentro de uma função,exceto dentro da própria função

let count = 0;

// Se criar uma variável com o mesmo nome dentro da function, a function vai usar a que está dentro dela
function add() { 
    let count = 0;
    count++;
}

add();
add();
console.log(count);
*/

//---------------------------------------------------

// Funções dentro de Funções

/*
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}

console.log(addSquares(2, 3));
*/

//---------------------------------------------------

// Arrays

/*

let colors = ['blue', 'red','green'];

console.log(colors[0]);

let ages = [10,20,30];

let list = ["Algo", 30, true];

let names = ["Alex", "Carlos", "Cris"];

let lists = ["blabla", names];

let lists2 = ["blabla", ["xx","yy"]];

console.log(lists2[1][0]);

let second =  lists2[1];

console.log(second[0]);

*/

//---------------------------------------------------

// Operações Básicas de Array

/*

let ingredients = [
    "água",
    "farinha",
    "ovo",
    "leite",
    'sal'
];

// ingredients.push("açucar"); // .push - Adiciona um novo item no Array

// ingredients.pop(); // remove o último item do array
// ingredients.shift(); // remove o primeiro item do array
 
console.log(ingredients);

console.log(`Total de ingredientes: ${ingredients.length}`);
*/

//---------------------------------------------------

// Exercício Arrays

//Retorne a posição do cars Ferrari

/*

let cars = ["BMW","Ferrari","Mercedes"];
let x = 1;
console.log('1. ' + cars[x]);

// Troque a Ferrari por Audi

cars[1] = "Audi";
console.log('2. Lista com Audi');
console.log(cars);

// Adicione o Volvo a lista
cars.push('Volvo');
console.log('3. Lista com Volvo');
console.log(cars);

// Exiba quantos itens tem no array
console.log('4. item no array: ' + cars.length);
*/

//---------------------------------------------------

// Objetos
/*
let character = {
    name: "Alexsandro",
    age: 50,
    country: "Brasil",
    eyes: [
        "vermelho",
        "azul"
    ],
    skills: {
        strength: 20,
        magic: 15,
        stamina: 10
    }
}
console.log(character.name);
console.log(character.age);
console.log(character.country);

console.log(`${character.name} tem ${character.age} anos.`);
console.log(character.skills.strength);

console.log(character.eyes[0]);
*/

//---------------------------------------------------

// Acessando e Alterando Objetos
/*
let character = {
    name: "Alexsandro",
    age: 50,
    country: "Brasil",
    eyes: [
        "vermelho",
        "azul"
    ],
    skills: {
        strength: 20,
        magic: 15,
        stamina: 10
    }
}

character.name = "Carlos";

character.skills.strength+=5;
console.log(`Força: ${character.skills.strength}`);

character.eyes.push("verde");

console.log(character.eyes);

let character2 = {
    name: "João",
    age: 20,
    cars: [
        {model: "Fiat", color: "preto"},
        {model: "Ferrari", color: "vermelho"}
    ]
}

console.log(character2.cars[0].model);*/

//---------------------------------------------------

// Função dentro de Objeto

/*
let person = {
    name : "Alexsandro",
    surname : "Corrêa",
    age: 26,
    completeName: function () {   // Arrow function não tem acesso ao diz por ser anônima, por isso o uso da function normal
        return this.name + ' ' + this.surname
    }
}

console.log(person.completeName());
*/

//---------------------------------------------------

// Loop for
/*

for (let i = 1; i <= 5; i++) {
  console.log("Número de Repetições: " + i);
    
}
*/

//---------------------------------------------------

// Usando for em Arrays

/*

let colors = ["Azul","Preto","Branco","Laranja"];

colors.push('Verde');

// Looping padrão
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Looping resumido baseado no array (colors)
for(let i in colors){
    colors[i].name = colors[i].toUpperCase();
    console.log(colors[i]);
}

// Outro looping resumido , usando o Array
for(let color of colors){
    console.log(color);
}

let colors2 = [
    {name: "Azul" , qt: 10},
    {name: "Black", qt: 5},
    {name: "White", qt: 15}
]

for(let color2 of colors2){
    console.log(`Nome: ${color2.name} - ${color2.qt}`);
}*/

//---------------------------------------------------

// Loop whie

/*

let number = 0;

while(number <= 10){
    console.log(`O número da vez é ${number}`);
    number++;
}

// Faz a mesma coisa que o while , de forma diferene
for(let n = 0; n <=10; n++){
    console.log(`O número da vez é  ${n}`);
}
*/

//---------------------------------------------------

// Exercício de Loops

// Faça um looping que mostre todas as frutas

/*

let fruits = ["Maçã", "Uva", "Banana"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Conte de 1 até 100 usando while

let number = 1;

while (number <=100){
    console.log(number);
    number++;
}
*/

//---------------------------------------------------

// Funções de Array

/*

// .length - Mostra a quantidade de itens do array
// .push - Adiciona um novo item no array
// .pop - Remove o último item do array
// .shift - Remove o primeiro item do array
// .join - converte todos os elementos de um array em uma string. 
// Os elementos são unidos por um separador especificado. Mas ele não modifica o array.
//  

let fruits = ["Maçã", "Uva", "Laranja","Banana"];

fruits[1] = 'Pêra'; // Substitui o item do índice selecionado

fruits[fruits.length -1] = "Abacaxi"; // Substitui o último item do array

console.log(fruits.join(', '));

console.log(fruits);
*/

//---------------------------------------------------

// Ordenação de Array
/*

let fruits = ["Maçã", "Uva", "Laranja", "Abacaxi"];

// .sort() - Ordena por ordem alfabética
// .reverse() - Inverte a ordem do array

fruits.sort();
fruits.reverse();

console.log(fruits);

let cars = [
    {brand: "Fiat", year: 2022},
    {brand: "BMW", year: 2018},
    {brand: "Ferrari", year: 2020},
]

// Ordenar por ano (year)

//Mesmo resultado do sort abaixo

// cars.sort((a,b)=>{
//   return a.year - b.year;
//})

cars.sort((a,b)=> {
    if(a.year > b.year){
        return 1;
    }else if (a.year < b.year){
        return -1;
    }else{
        return 0;
    }
});

console.log(cars);
*/

//---------------------------------------------------

// Iteração de Array

// .filter() - Filtra o array de acordo com as condições definidas
// .every() - Todos - se todos da lista atenderem a condição
// .some() - Algum - se algum da lista atender a condição
// .includes() - busca por valor específico

let fruits = ["Maçã", "Uva", "Laranja", "Abacaxi"];

let bigFruits = fruits.filter((item)=>{
    return item.length > 4;
})

console.log(bigFruits);

let ok = fruits.every((value)=>{
    return value,length > 3;
})

if(ok){
    console.log('Todos são maior que 3');
}else{
    console.log('Não são todos maior que 3');
}

if(fruits.includes('Uva')){
    console.log("Tem uva sim!");
}else{
    console.log("Não tem uva!");
}