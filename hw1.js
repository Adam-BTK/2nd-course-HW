let a = 10;
alert(a);
a = 20;
alert(a);
// Задание 1

const iPhoneInvented = 2007;
alert(`Год выпуска первого iPhone ${iPhoneInvented}`);
// Задание 2

const inventOfJava ='Брендан Айк'; 
alert(inventOfJava);
// Задание 3

let b = 10;
let d = 2;
alert(b + d);
alert(b - d);
alert(b * d);
alert(b / d);
// Задание 4


let result = (2**5);
alert(result);
// Задание 5

let e = 9;
let f = 2;
alert(e / f);
// Задание 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// Задание 7 

let age = Number(prompt('Сколько вам лет?'));
alert(`Вам всего лишь ${age} лет`);
// Задание 8

let user = {
  name: 'Петя',
  age: 30,
  isAdmin: true,
}
// Задание 9.0

user.cityOfResidence = 'Los Angels';
// Задание 9.1

delete user.age;
user.hasCar = true;
// Задание 9.2

delete user.cityOfResidence;
// Задание 9.3

let info = prompt("Какую информацию хотите узнать о пользователе?");
let reply1 = 'Возраст';
let reply2 = 'Имя';
 
if (info == 'Возраст') {
  alert(`Пользователю ${user.age} лет`);
} else {alert(`Пользователя зовут ${user.name}`)}

// Задание 9.4

let userName = prompt('Как вас зовут?')
alert(`Привет ${userName} !`)
// Задание 10
