
// Вывод смайликов
let word = ':)'

let result = ''

for (let i=1; i<=5; i++) {

    result+=word

    console.log(result)
}

// Функция с выводом смайликов

let result1 = ''

function printSmiles(stroka, numberOfRows) {
    for (let i = 1; i<= numberOfRows; i++)

    result1+=stroka
    console.log(result1)
}

printSmiles(':)', 6)