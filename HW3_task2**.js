
// Task 2*** Реализуйте считывание JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании


const fs = require ('fs')

const json = require('./task2')

let unique = Array.from(new Set(json.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));

console.log(unique)