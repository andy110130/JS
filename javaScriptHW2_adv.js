// Задание 1. Написать скриптикб который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let base = 2 
// let result
// let exponent = 1

// while(exponent <= 10) {
    
//     result = Math.pow(base, exponent++ )

//     console.log(result, "-- 2 v " + (exponent-1),"stepeni") 
// }
 

// Задание 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2.

// const base = 2 
// let result

// function exp(exponent){
// while(exponent <= 10) {
    
//     result = Math.pow(base, exponent++ )

//     console.log(result, "-- 2 v " + (exponent-1),"stepeni") 
// }
// }
// exp(10)


//  Задание 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

// let smiles = [   , 
//                ':)',
//                ':):)',
//                ':):):)',
//                ':):):):)', 
//                ':):):):):)']

// for (item_1 in smiles) {
//     console.log(item_1, smiles[item_1])
// }              

 
//2*. Преобразовать 2-ую задачу в функцию, принимающую на вход строку, которая и будет выводится в консоль (как в условии смайлик), а также количество строк для вывода.

let smiles = [   , 
              ':)',
              ':):)',
              ':):):)',
              ':):):):)', 
              ':):):):):)']

function numberOfRow(stroka, numberOfRow){

for (items in smiles) {

if(items == (numberOfRow+1)) {break}



console.log(items, smiles[stroka])
}
}
numberOfRow(5, 4)





