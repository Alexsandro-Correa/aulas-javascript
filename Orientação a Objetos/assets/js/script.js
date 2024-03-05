// Conceitos
// Programação Orientada a Objetos - POO
// Programação Procedural
// Programação Funcional - PF

// Javascript - Prototype-based procedural language

// POO - Classes / Funções

//---------------------------------------------------

// Classes : Construtor e This

/*

class Person {
  age = 0;
  steps = 0;
  _height = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  takeAStep() {
    this.steps++;
  }

  setAge(newAge) {
    if (typeof newAge === "number") {
      this.age = newAge;
    } else {
      console.log("Idade não aceita. (Apenas Números)");
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get height() {
    return this._height;
  }

  set height(x) {
    if (typeof x === "number") {
      this._height = x;
    }
  }
}

//---------------------------------------------------

// Classes : Instância

// Objetos p1,p2,p3
let p1 = new Person("João", "Silva"); // Instâncias
let p2 = new Person("Maria", "Rosa");
let p3 = new Person("Pedro", "Duarte");

// p1.age = 20;
// p2.age = 25;
// p3.age = 22;

// console.log(`P1 = ${p1.name} tem ${p1.age} anos.`);
// console.log(`P2 = ${p2.name} tem ${p2.age} anos.`);
// console.log(`P3 = ${p3.name} tem ${p3.age} anos.`);

//---------------------------------------------------

// Classes : Action

// p1.takeAStep();
// console.log(`Passos de ${p1.name} : ${p1.steps}`);
// console.log(`Passos de ${p2.name} : ${p2.steps}`);

// p1.setAge(20);

// console.log(`P1 = ${p1.name} tem ${p1.age} anos.`);

//---------------------------------------------------

// Classes : Getter e Setter

// Linhas 36 a 48 - Criação dos Gets e Sets

p1.height = 1.65;

console.log(`P1 = ${p1.fullName} tem ${p1.height}m.`);

//---------------------------------------------------

*/

// Classes : Herança

/*

class Person {

    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} diz olá!`);
    }
}

class Student extends Person {

    constructor(name,id) {
        super(name);
        this.id = id;
    }

}

let p1 = new Student('Carla', 12345);
p1.age = 20;

let p2 = new Student('Pedro', 12346)

console.log(`A aluna ${p1.name} tem ${p1.age} anos e matricula ${p1.id}`);
// p1 é um Student mas também tem acesso as variáveis de Person porque está herdando dessa classe

p1.sayHi();
// sayHi() foi criado no construtor da classe pai, e por isso o p1 tem acesso
// Se eu criar uma função com o mesmo nome em Student , ele vai dar prioridade a que etsá no Student,
// por ser a classe principal desse objeto.

*/

//---------------------------------------------------

// Classes : Variável/Método estático

// O método estático faz referência a classe
// Para alterar ou acessar tem que chamar com a classe
// Vale a mesma regra se criar uma função com static dentro da classe
// Ex : Person.hands
// Ex2 : static sayHi() {}
// Person.sayHi() - Acessa
// p1.sayHi() - Não acessa

/*
class Person {

    static hands = 2;
    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi() {
        console.log(`Olá, eu sou ${this.name} e tenho ${Person.hands} mãos.`);
    }

}

let p1 = new Person('Alex');
p1.sayHi(); */

//---------------------------------------------------

// Classes : Factory
/*

class Person {

    age = 0; 

    constructor(name){
        this.name = name;
    }
}

// Aplicação do Conceito de Factory - Cria uma função para criar uma instância
function createPerson(name,age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Alex', 26);
console.log(`${p1.name} tem ${p1.age} anos.`);
*/

//---------------------------------------------------

// Projeto Luta

//---------------------------------------------------

// Programação Funcional - Factory

// Função que cria objetos de forma padronizada

/*

function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
  };
}

let person1 = createPerson('Alex', 'Corrêa', 26);
let person2 = createPerson('João', 'Luiz', 28);

*/

//---------------------------------------------------

// Funcional : Instância e This

/*

function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
    getFullName() {
      return `${this.name} ${this.lastName}`;
    }
  };
}

let person1 = createPerson('Alex', 'Corrêa', 26);
let person2 = createPerson('João', 'Luiz', 28);

console.log(person1.getFullName());

*/

//---------------------------------------------------

// Funcional - Construtor

// Objeto não tem um construtor, somente classes tem

//---------------------------------------------------

// Funcional - Herança

/*
const defaultUser = {
  name: '',
  email: '',
  level: 1
}

let user1 = {
    ...defaultUser,
    name: 'Alex',
    email: 'alex@email'
}

console.log(user1);

let amd1 = {
  ...defaultUser,
  name: 'Adm',
  email: 'adm@email',
  level: 2
}

console.log(amd1);
*/

//---------------------------------------------------