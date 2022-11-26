let userName = 'Марк';
console.log(userName);

// typeof
let someAnotherName = 'Bob';
console.log(typeof someAnotherName); // Выведет тип переменной

// Сравнения
console.log(10 > 5); // print true in console

let result = 10 == 5;
console.log(result); // print false on console

// == - нестрогое сравнение
// === - строгое сравнение

console.log('5' == 5); // true
console.log('5' === 5); // false

// Тернарный оператор
let firstNumber = 10;
let secondNumber = 5;
firstNumber < secondNumber ? console.log('true') : console.log('false');

let time = 10;
let greeting = time < 12 ? 'Доброе утро' : 'Добрый день';
console.log(greeting);

const againSomeName = 'Mark';
console.log('Hello, ' + againSomeName + ' how are u?');
// or
console.log(`Hello, ${againSomeName} how are u?`);

// ------ //
// functions:

// function declaration:
function sayHi() {  // В таком случае можно сначала вызвать функцию, а потом написать ее тело
    console.log('Hello!');
}
sayHi(); // вызов

// function expression:
const sayHi1 = function () { // В таком случае можем вызывать только после создания функции
    console.log('Hello!');
}

function sayHiToUser(name) {
    console.log(`Hello ${name}!`);
}
sayHiToUser('Bob');
