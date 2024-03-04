// alert('Olá Mundo!');

// console.log('Olá Mundo!');

//---------------------------------------------------

// Variáveis

/*
let name = "Alexsandro"; // string
let age = 26; // number
let city = "Lages"; // string
let state = "SC"; // string
let on = true; // boolean
let list = ["ovo", "óleo", "trigo"]; // array
let completeName = {name = "Alex", age = 26}; // object

console.log("Meu nome é" , name);
console.log("Eu tenho", age, "anos.");
console.log("Eu moro em" , city, state);
*/

//---------------------------------------------------

// Exercício de Variáveis

/*
let car = "Ferrari";
console.log(car);

let price = 19.99;
console.log("O bolo custa R$" + price);

let city = "São Paulo";
console.log(city);
*/

//---------------------------------------------------

// let, const, var

/*
let e var são variáveis,ou seja, podem ser alterados
const é uma constante (valor fixo), ou seja, seu valor não pode ser alterado
*/

//---------------------------------------------------

// Operações em Variáveis

/*
// Usando variável do tipo number, é possível fazer qualquer tipo de conta no js
let x = 2;
x = x + 8;
console.log(x);

let n1 = 15;
let n2 = 10;
let n3 = 20;
let sum = (n1 + n2) * n3;
console.log(sum);

let name = "Alexsandro"
let surname = "Corrêa"
let completeName = name + " " + surname;
console.log(completeName);
*/

//---------------------------------------------------

// String e Template String

/*
let name = "Alexsandro"
let surname = "Corrêa"
let age = 26;
// let completeName = name + ' ' + surname;
let completeName = `${name} ${surname} Rosa`; // Template String
let stringAge = `Idade: ${age} anos.` // Template String

console.log("Nome Completo:" , completeName);
console.log(stringAge);
*/

//---------------------------------------------------

// Condicional if / else

/*

// > Maior
// < Menor
// == Igual
// >= Maior Igual
// <= Menor Igual
// != Diferente

let age = 16;

if (age >= 18) {
    console.log("Você é maior de idade!");
}else {
    console.log("Você é menor de idade!");
}
*/

//---------------------------------------------------

// Condicional == e ===

/*
// O ===  é mais restritivo e só cai na condição se o valor e o tipo forem iguais

let age = "20";

if (age === "20"){
    console.log("Você tem 20 anos.");
}
*/

//---------------------------------------------------

// Multi-condicionais (&& e ||)

/*
let age = 55;

if (age >= 18 && age < 60) {
  console.log("Você é um adulto");
}

if (age >= 18) {  // Outra forma de obter o mesmo resultado do if acima
  if (age < 60) {
    console.log("Você é um adulto");
  }
}

if (age >= 18 || age < 60) {
    // Nesse caso, se qualquer uma das condições bater, o código desse if será executado
}

*/

//---------------------------------------------------

// Condicional Dupla (if else if)

/*
let age = 55;

if(age < 18){
    console.log("Você é menor de idade.");
}else if(age >= 18 && age < 60){
    console.log("Você é um adulto");
}else if (age > 60){
    console.log("Você é um idoso.");
}
*/

//---------------------------------------------------

// Exercício de Condicional

/*

let x = 10;
let y = 5;
console.log(x > y);

let w = "10";
let z = 10;
console.log(w === z);

let a = 10;
let b = 5;
console.log(a != b);

let price = 40.3;

if(price <= 45) {
    console.log("A carne está barata!");
}else{
    console.log("A carne está cara!");
}
*/

//---------------------------------------------------

// Condicional Ternário

/*
let isMember = false;

// If terário , passa a condição primeiro, o ? representa se a condição bateu e o : se não bateu
let shipping = (isMember ? "2" : "10");

let age = 90;
let isAdult = (age >=18 ? "Sim" : "Não");

console.log(isMember ? "Você é membro" : "Você não é membro");
console.log("Frete:" , shipping);
*/

//---------------------------------------------------

// Switch

let profession = "fiscal";

console.log("Profissão: " + profession);

switch (profession) {
  case "fiscal":
    console.log("Sua camisa será verde!");
    break;

  case "policial":
    console.log("Sua camisa será azul!");
    break;

  case "bombeiro":
    console.log("Sua camisa será vermelha!");
    break;

  default:
    console.log("Sua camisa será preta!");
    break;
}
