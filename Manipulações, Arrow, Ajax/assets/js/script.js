//---------------------------------------------------

// Métodos de String

/*

let fullName = "Alex Corrêa";


// .length - Retorna quantos caracteres tem na string
console.log(fullName.length); 

// .indexOf()
console.log(fullName.indexOf('Corrêa')); // .indexOf('') - Retorna a posição que o texto começa
// Caso não tenha o texto passado no parâmetro, ele passa -1
// Caso seja a primeira letra (nesse caso 'A'), ele retorna 0

// if usando indexOf para verificar se tem essa sequencia de caracteres na variável
// Se não tiver, o resultado vai dar -1, então cai no else
if(fullName.indexOf('Ale') > -1){
    console.log('Achou!');
}else{
    console.log('Não Achou!');
}

// .slice()
console.log(fullName.slice(2,10)); // Retorna a string a partir do indice selecionado no seu
// parâmetro, até o indice passado no segundo parâmetro. (o segundo não é obrigatório).

// .substring()
console.log(fullName.substring(2,10)); // Semelhante ao slice, porém no slice se passar 
// valor negativo , ele começa do fim a contagem, no substring não.

// .substr()
console.log(fullName.substr(2,10)); // Semelhante aos dois anteriores, a diferença é q o segundo 
// parâmetro desse define a quantidade de caracteres, e não a posição final.
// substr() funciona com valor negativo, diferente do substring().

// . replace()
console.log(fullName.replace('Corrêa', 'Matos')); // - Substitui texto específico, o primeiro parâmetro
// é o texto que vai ser substituído, o segundo é o novo valor que vai entrar no lugar do primeiro.

// o replace() não substitui a variável, só substituiria se fizesse assim
// fullName = fullName.replace('Corrêa', 'Matos')
console.log(fullName);

// .toUpperCase() - Deixa todo o texto maiúsculo
console.log(fullName.toUpperCase());

// .toLowerCase() - Deixa todo o texto minúsculo
console.log(fullName.toLowerCase());

// .concat() - Pouco usada. Ele concatena o valor original + o valor do parâmetro
console.log(fullName.concat(' Rosa'));

// .trim() - Remove os espaços excedentes
console.log(fullName.trim());

// .charAt() - Busca o caracter da posição passada no parâmetro
console.log(fullName.charAt(3));

// .split() - Transforma uma string em um array baseado na condição passada no parâmetro
console.log(fullName.split(' '));

*/

//---------------------------------------------------

// Métodos de Numbers

/*

let age = 10.31544;
let stringAge = '10.9';
console.log(age);

// .toString() - Tranforma um number em string
console.log(age.toString());

// .toFixed() - limita a quantidade de números depois da vírgula baseado no valor passado no parâmetro
console.log(age.toFixed(2));

// .parseInt(stringAge) - Transforma uma string em number (Inteiro)
console.log(parseInt(stringAge));

// .parseFloat(stringAge) - Transforma uma string em um number (Decimal)
console.log(parseFloat(stringAge));

*/

//---------------------------------------------------

// Métodos de Arrays

/*

let cars = ["Saveiro", "Fusca", "Ka", "Civic"];
let brand = ["Ford", "Renault", "Audi"];

// .toString() - Transforma em string, separando cada item por vírgula
console.log(cars.toString());

// .join('/') - Transforma em string, separando cada item por o que for passado no parâmetro
console.log(cars.join("/"));

// .indexOf() - Busca um item baseado no que for passado no parâmetro, e se não achar retorna -1.
console.log(cars.indexOf("Saveiro"));
console.log(cars.indexOf("Sav"));

// .pop() - Remove o último item do array
cars.pop();
console.log(cars);

// .shift() - Remove o primeiro item do array
cars.shift();
console.log(cars);

// .push() - Adiciona um novo item no array
cars.push("Montana");
console.log(cars);

// .splice() - Remove um item do array baseado nos parâmetros
// Primeiro parâmetro é o primeiro índice que vai ser removido
// Segundo parâmetro é a quantidade de itens que vai ser removido
cars.splice(2, 1);
console.log(cars);

// .concat() - Concatena as listas, mas não altera, por isso tem que criar outra variável para armazenar
let newCars = cars.concat(brand);
console.log(newCars);

// .sort() - Ordena o Array em ordem alfabética
console.log(newCars.sort());

// .reverse() - Inverte a ordem do Array
console.log(newCars.reverse());

let list = [45, 4, 9, 16, 26];
let list2 = [];

// .map() - Mapeia os item da lista e roda a função em looping em todos os itens do Array
list2 = list.map(function (item) {
  return item * 2;
});
console.log(list2);

// .filter() - Roda uma função que retorna um boolean baseado na condição passada na function
list2 = list.filter(function (item) {
  if (item < 20) {
    return true;
  } else {
    return false;
  }
});
console.log(list2);

//.every() - Retorna true apenas se todos baterem a condição
list2 = list.every(function (item) {
  if (item > 20) {
    return true;
  } else {
    return false;
  }
});

console.log(list2);

// .some() - Retorna true se algum bater a condição
list2 = list.some(function (item) {
  // if(item > 20){
  //     return true;
  // }else {
  //     return false;
  // }
  return item < 20 ? true : false; // Mesma verificação, mas resumida em if ternário
});

console.log(list2);

// .find() - Procura algum item no array e retorna o primeiro item que encontrar na condição passada
list2 = list.find(function (item) {
  return item === 16 ? true : false;
});

console.log(list2);

// .findIndex() - Procura algum item no array e retorna a posição do primeiro item que encontrar na condição passada
list2 = list.find(function (item) {
  return item === 16 ? true : false;
});

console.log(list2);

let names = [
    {id:1, name:'João', lasName: 'Silva'},
    {id:2, name: 'Maria', lastName: 'Santos'},
    {id:3, name: 'Carla', lastName: 'Silveira'},
]

let person = names.find(function(item){
    return (item.lastName === 'Santos') ? true : false;
})

console.log(person);

*/

//---------------------------------------------------

// Datas

/*

let date = new Date();

console.log(date); // Exibe a data e a hora atuais no formato completo do JavaScript.
console.log(date.toDateString()); // Exibe a data (dia, mês e ano) no formato de string, mas sem a hora.
console.log(date.toUTCString()); //Exibe a data e a hora no formato de string 
// UTC (Tempo Universal Coordenado), que é um padrão de tempo usado em todo o mundo.
console.log(date.toString()); // Exibe o texto da data em string
console.log();

// o Mês começa do 0 / Janeiro no javascript
date = new Date(2020,0,1,12,30,12);
// Formato ^ = dia, mês,ano ,hora, minutos,segundos.
console.log(date);

date = new Date('2020-01-01 15:42:16'); // Formatação em String
console.log(date);

date = new Date(2022,2); // Precisa passar no mínimo ano e mês no parâmetro
console.log(date);

date = new Date();

let newDate = date.getFullYear(); // Pega o Ano
console.log(newDate);

newDate = date.getMonth(); // Pega o Mês
console.log(newDate);

newDate = date.getDay(); // Pega o Dia da Semana
console.log(newDate);

newDate = date.getDate(); // Pega o Dia
console.log(newDate);

newDate = date.getHours(); // Pega a Hora
console.log(newDate);

newDate = date.getMinutes(); // Pega os Minutos
console.log(newDate);

newDate = date.getSeconds(); // Pega os Segundos
console.log(newDate);

newDate = date.getMilliseconds(); // Pega os Milisegundos
console.log(newDate);

newDate = date.getTime(); // Pega o Time Stamp - quantidade de milisegundos q passaram desde 1970 até agora
console.log(newDate);

newDate = Date.now(); // Pega o momento (time stamp) Atual
console.log(newDate);

date.setFullYear(2000); // Trocar o ano
newDate = date;

console.log(newDate);

date.setMonth(11); // Trocar o mês
newDate = date;

console.log(newDate);

// ... e Segue nos sets igual como é pra pegar os valores com get, mas passando o novo valor no parâmetro

date.setDate(date.getDate() + 2 ); // Incrementar dias baseado no dia armazenado na variável
newDate = date;

console.log(newDate);

date.setHours(date.getHours() + 2 ); // Incrementar horas baseado na hora armazenado na variável
newDate = date;

console.log(newDate);

*/

//---------------------------------------------------

// Matemática

/*

let newValue = 0;

newValue = Math.PI; // Retorna número PI
console.log(newValue);

newValue = Math.round(3.5); // Arredonda o número para o valor inteiro mais próximo
console.log(newValue);

newValue = Math.floor(3.6); // Arredonda para baixo
console.log(newValue);

newValue = Math.ceil(3.2) // Arredonda para cima
console.log(newValue);

newValue = Math.abs(-5); // Para saber o valor absoluto(positivo) do número 
console.log(newValue);

newValue = Math.min(7,5,6,10,2); // Retorna o menor valor
console.log(newValue);

newValue = Math.max(16,8,2,3,15); // Retorna o maior valor
console.log(newValue);

newValue = Math.random(); // Retorna um valor aleatório entre 0 e 1
console.log(newValue);

newValue = Math.floor(Math.random() * 100); // Retorna um valor aleatório entre 0 e 100
console.log(newValue);

*/

//---------------------------------------------------

// Intervalos

/*

let timer;

function start() {
  timer = setInterval(showTime, 1000);
  // setInterval - Inicia o timer - Primeiro parâmetro é o que vai ser executado
  // Segundo parâmetro é de quanto em quanto tempo ele vai ser executado (em Milisegundos)
}

function stop() {
  clearInterval(timer);
  // clearInterval - Limpa os dados - Para o timer
}

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let txt = hour + ":" + minute + ":" + seconds;

  document.querySelector(".demo").innerHTML = txt;
}

let timer2;

// setTimeout - Roda após o tempo do segundo parâmetro uma única vez
function run() {
  timer2 = setTimeout(function () {
    document.querySelector(".demo2").innerHTML = "Rodou";
  }, 2000);
}

function stopRun(){
    clearTimeout(timer2);
    // clearTimeout() - Para o setTimeout() antes dele executar
}

*/

//---------------------------------------------------

// Template Strings
// `` - Esse é o template string

/*

let name = 'Alex';
let age = 26;

let phrase = `Meu nome é ${name} e eu tenho ${age} anos.`;

console.log(phrase);

*/

//---------------------------------------------------

// Desconstruindo Objetos

/*

let person = {
    name: 'Alex',
    lastName: 'Corrêa',
    social:{
        facebook: 'AlexCRM',
        instagram:{
            url: '@alexcrm',
            followers: 250
        }
    },
    fullName: function() {
        return `${this.name} ${this.lastName}`;
    }
};

//let { name:personName, lastName = "Rosa", age = 26} = person; // Desconstruindo aqui  
// Você pode colocar um valor padrão pra um objeto do objeto, mas não substitui se já existir

// console.log(personName, lastName, age);

// let {facebook, instagram} = person.social;

// console.log(facebook, instagram);

let {name, lastName, social:{instagram:{url:instagram,followers}}} = person;

console.log(name, lastName,instagram,followers);

function getFullName (obj) {
    return `${obj.name} ${obj.lastName}`;
}

console.log(getFullName(person));

*/

//---------------------------------------------------

// Desconstruindo Arrays

/*

let info = ['Alex Corrêa', 'Alex', 'Corrêa', '@alexcrm'];

let [ fullName, name, lastName, instagram, age=90 ] = info;
// Ele pega o valor seguindo a order do array
// 0 > 'Alex Corrêa' 
// 1 > 'Alex'
// O nome definido não altera o valor, o que vale aqui é a ordem
// Se quiser pular um item do array basta colocar um espaço vazio entre vírgulas > , ,
// Eu posso criar um novo se for um índice maior dos que já existem > Ex > age=90

console.log(fullName, name, lastName, instagram,age);

*/

//---------------------------------------------------

// Arrow Functions ()=>{}

/*

// Função normal
// function sum (x,y){
//     return x+ y;
// }
//
// console.log(sum(5,15));

// Função com variável
// let sum = function(x,y){
//    return x+ y;
// }
//
// console.log(sum(15,20));

// Arrow Function

// let sum = (x,y) => {
//     return x + y;
// }
//
// console.log(sum(10,20));

// Arrow Function - Outra Forma - Expressão Direta
let sum = (x,y) => x +y;

console.log(sum(1,3));

// Arrow Function - Outra Forma - Expressão Direta com apenas 1 parâmetro
let lettersInName = name => name.length;

console.log(lettersInName('Alex'));

*/

//---------------------------------------------------

// Operador Spread ...

/*

let numbers = [1, 2, 3, 4];

// ...numbers, nesse exemplo , adiciona os valores de numbers no  início do array others
let others = [...numbers, 5, 6, 7, 8];

console.log(others);

others = [numbers, 5, 6, 7, 8];

console.log(others); // Exemplo de como fica sem o spread

let newNumbers = { n0: 1, n1: 2, n2: 3, n3: 4 };
let newOthers = { ...numbers, n4: 5, n5: 6, n6: 7, n7: 8 };

console.log(newOthers); // Exemplo de como fica sem o spread

*/

//---------------------------------------------------

// Operador Rest

/*

// ... no parâmetro, faz a função aceitar vários itens sem precisar definir um tamanho
// isso é o operador rest

function add(...numbers){
    console.log(numbers);
}

add(5,6,7,8,9,10);

function addNames(names, ...newNames){
    let newConj = [
        ...names,
        ...newNames
    ];

    return newConj;
}

let names = ['Alex', 'João'];
let others = addNames(names, 'Antonio', 'Maria','Carlos');

console.log(others);

*/

//---------------------------------------------------

// Includes e Repeat

/*

let list = ['ovo', 'café', 'arroz','feijão', 'macarrão'];

// Includes retorna true se tiver o item da variável no array, se não retorna false
console.log(list.includes('ovo'));

// Includes também verifica se tem a letra na string
let name = 'Alex';
console.log(name.includes('A'));

// Repeat - repete o número de vezes definida no parâmetro
console.log('x'.repeat(20));

*/

//---------------------------------------------------

// Objeto: Key, Values e Entries

/*

let list = ['ovo','leite','trigo','fermento'];
let person = {name: 'Alex', lastName:'Corrêa', age: 26};

console.log( Object.keys(list) ); // Pega o índice
console.log( Object.values(list) ); // Pega os valores
console.log( Object.entries(list) ); // Cria um array para cada item

console.log( Object.keys(person) );
console.log( Object.values(person) );
console.log( Object.entries(person) );

*/

//---------------------------------------------------

// String, padStart, padEnd

let telephone = '5466';

// padEnd - Força a string a ter o número de dígitos mínimo passado no primeiro parâmetro
// Se não tiver, completa com o que foi passado no segundo parâmetro
console.log( telephone.padEnd(9, '*') ); 

// padStart - é igual ao padEnd, mas adiciona no começa em vez de completar
console.log( telephone.padStart(9, '*'));

let card = '1234456778991234';

let lastDigits = card.slice(-4); // Pegando os últimos 4 dígitos do card

let maskCard = lastDigits.padStart(16, '*');

console.log('Este é o seu cartão? ' + maskCard);