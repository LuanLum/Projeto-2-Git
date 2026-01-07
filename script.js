"use strict";
/*
Requisitos:

1.  Implemente o FizzBuzz de 1 a 100 no console do navegador.
2.  Implemente a sequência de Fibonacci em estilo funcional puro (sem for, let, var, while ou mutação de estado).
3.  Demonstre que entende a diferença entre let e const criando exemplos que mostram onde cada um falha ou funciona.
4.  Crie uma class com um método simples (speak()) e instancie um objeto dela.
5.  Crie e ordene um array de strings com Array.sort(), sem usar .localeCompare().
6.  Crie um Map com três pares chave-valor e percorra com for...of.
7.  Use fetch() para consumir uma API pública (https://jsonplaceholder.typicode.com/todos/1) e imprima o JSON no console.
*/

// 1    -------------------------------------------------------------

function fizzBuzz(size) {
  // Naming
  const FizzBuzz = "FizzBuzz!!!"; // a % 3 == 0 && a 5 == 0
  const Fizz = "Fizz!"; // a % 3 == 0
  const Buzz = "Buzz!"; // a % 5 == 0

  for (let i = 0; i < size; i++) {
    const num = i + 1;
    num % 3 == 0 && num % 5 == 0
      ? console.log(`${num} ${FizzBuzz}`)
      : num % 3 == 0
      ? console.log(`${num} ${Fizz}`)
      : num % 5 == 0
      ? console.log(`${num} ${Buzz}`)
      : 0;
  }
}

function fizzBuzz2(size) {
  const fizzBuzz = "FizzBuzz!!!"; // a % 3 == 0 && a 5 == 0
  const fizz = "Fizz!"; // a % 3 == 0
  const buzz = "Buzz!"; // a % 5 == 0

  for (let i = 0; i < size; i++) {
    let message = "";
    const num = i + 1;
    const multipleOf3 = num % 3 == 0;
    const multipleOf5 = num % 5 == 0;

    multipleOf3 && multipleOf5
      ? (message = fizzBuzz)
      : multipleOf3
      ? (message = fizz)
      : multipleOf5
      ? (message = buzz)
      : "";
    message ? console.log(`${num} ${message}`) : "";
  }
}

function fizzBuzz3(size) {
  // Naming
  const fizzBuzz = "FizzBuzz!!!"; // a % 3 == 0 && a 5 == 0
  const fizz = "Fizz!"; // a % 3 == 0
  const buzz = "Buzz!"; // a % 5 == 0

  for (let i = 0; i < size; i++) {
    const num = i + 1;

    if (num % 3 == 0 && num % 5 == 0) {
      console.log(`${num} ${fizzBuzz}`);
    } else if (num % 3 == 0) {
      console.log(`${num} ${fizz}`);
    } else if (num % 5 == 0) {
      console.log(`${num} ${buzz}`);
    }
  }
}

// fizzBuzz(30);
// fizzBuzz2(30);
// fizzBuzz3(30);

// 2    -------------------------------------------------------------
function fib(n) {
  let x = 0;
  // console.log(`${x}: ${n}`);
  // x++;
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
const fib2 = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

// console.log(fib(10));
console.log(`${fib2(10)}`);

// 3    -------------------------------------------------------------

const PI = 3.1415; // Valores constantes
const name = "Luan"; // Alteração não pretendida
const index = 0; // declaradas apenas num escopo (função ou classe)
let curr = 0; // valores iterados para obter um resultado
let quantity = 10; // valores que podem mudar.
let description = `Porção de 150g, contém glúten`;
let currOption; // Variaveis apenas iniciadas;

// 4    -------------------------------------------------------------

const Person = class {
  constructor(name, mainLanguage, secondLanguage) {
    this.name = name;
    this.mainLanguage = mainLanguage;
    this.secondLanguage = secondLanguage;
    this.nationality = "Australian";
  }

  speak() {
    console.log(
      `${this.name} speaks ${this.mainLanguage} and ${this.secondLanguage}!`
    );
  }
};

const luan = new Person("Luan", "Portuguese", "English");
luan.speak();

console.log(`${luan.name} is ${luan.nationality}.`);
luan.nationality = "Brazilian";
luan.age = 27;
console.log(`${luan.name} is ${luan.nationality} and ${luan.age} years old.`);
console.log(luan);

// 5    -------------------------------------------------------------
// Crie e ordene um array de strings com Array.sort(),
// sem usar .localeCompare().

const names = [];

names.push("Victoria");
names.push("Anna");
names.push("Priscilla");
names.push("Amélia");
names.push("Francisca");

console.log(names);

const namesOrdered = names.sort();

console.log("Unsorted:");
for (const name of names) {
  console.log(name);
}

console.log("Sorted:");
for (const name of namesOrdered) {
  console.log(name);
}

// 6    -------------------------------------------------------------
const family = new Map([
  ["self", "Luan"],
  ["brother", "Christian"],
  ["sister", "Emmanuelly"],
  ["mother", "Luciana"],
  ["father", "Cristiano"],
  ["isFather", false],
]);

for (const [k, v] of family) {
  console.log(`${k}: ${v}`);
}

// 7    -------------------------------------------------------------

// old method
const loadDataJSON = function () {
  fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
    });
};

// old method + error handling
const loadDataJSON2 = function () {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      // You must return the promise of the parsing
      return response.json();
    })
    .then(function (result) {
      // This second .then handles the actual data
      console.log(result);
    })
    .catch(function (error) {
      // Catches errors from fetch OR the parsing
      console.error(error.message);
    });
};

// new method + error handling
async function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${respose.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

loadDataJSON();
loadData();
