




// Задание №1* Преобразовать задание №2 из ДЗ в функцию, принимающую на вход возраст. Вывести в консоль результат работы функции с возрастами 17, 18, 61.

 let age_2 = 18
 let age_3 = 60

 const checkAge = function(age){

 if (age < age_2 ) {
 console.log('You dont have access cause your age is', + age, 'Its less then')
 }
   
 else if (age >= age_2 && age <= age_3) {
 console.log('Welcome')
 }

 else if (age > age_3) {
 console.log('Keep calm and look Culture channel')
 }

 else {console.log('Technical work')
 }

 }
 checkAge(17)
 checkAge(18)
 checkAge(61)

// Задание №2 из ДЗ.

let age_1 = 10 

 let age_2 = 18

 let age_3 = 60 

 if (age_1 < age_2 ) {
 console.log('You dont have access cause your age is', + age_1, 'Its less then')
 }

 else if (age_1 >= age_2 && age_1 < age_3) {
 console.log('Welcome')
 }

 else if (age_1 > age_3) {
 console.log('Keep calm and look Culture channel')
 }

 else console.log('Technical work')

 //Задание №2*. Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.


 let age_2 = 18
 let age_3 = 60


const checkAge = function(age){

     if (typeof age == "number"){

     if (age < age_2 ){
     console.log('You dont have access cause your age is', + age, 'Its less then')
     }

     else if (age >= age_2 && age <= age_3){
     console.log('Welcome')
     }

     else if (age > age_3){
     console.log('Keep calm and look Culture channel')
     }

     else {
     console.log('Technical work')
     }

 } else {console.log("Wrong data type")}
 }
 checkAge(17)
 checkAge("dfghj")

// ЗВдвние №3*. Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number.


 let age_2 = 18
 let age_3 = 60

 const checkAge = function(age){
   age = Number(age)

   if (!isNaN(age)){

     if (typeof age == "number"){

     if (age < age_2 ){
     console.log('You dont have access cause your age is', + age, 'Its less then')
     }

     else if (age >= age_2 && age <= age_3){
     console.log('Welcome')
     }

     else if (age > age_3){
     console.log('Keep calm and look Culture channel')
     }

     else {
     console.log('Technical work')
     }}

 } else {console.log("Wrong data type")}
 }
checkAge(17)
checkAge("22aaa")
checkAge("-22323")

// Задание №4. Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке.

let age_2 = 18
let age_3 = 60

const checkAge = function(age){
  age = Number(age)

  if (!isNaN(age)){

    if (typeof age == "number"){

    if (age < age_2 ){
    alert('You dont have access cause your age is', + age, 'Its less then')
    }

    else if (age >= age_2 && age <= age_3){
    alert('Welcome')
    }

    else if (age > age_3){
    alert('Keep calm and look Culture channel')
    }

    else {
    alert('Technical work')
    }}

} else {alert("Wrong data type")}
}
let age = prompt("Enter your age")




