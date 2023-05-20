// let password = 'qwerty123';
// let passRequest = prompt('Введите пароль');
// let result = (passRequest === password) ? 'Пароль введен верно' : 'Пароль введен неправильно';
// console.log(result);

// Задача 1

// let c = 8;
// let result = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
// console.log(result);
// 0, 10, −3, 2.

// Через if else 

// if (c > 0 && c < 10) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//Задача 2

// let d = 199;
// let e = 10;

// let result = (d > 100 || e > 100) ? 'Верно' : 'Неверно';
// console.log(result);

// Задача 3

// let a = '2';
// let b = '3';
// a = Number(2);
// b = Number(3);
// // Код выше изменять нельзя, чтобы решить задачу исправьте код ниже: 
// alert(a + b);

// Задача 4

// let monthNumber = prompt('Введите число и узнайте время года');

// switch (monthNumber) {
//   case '12':
//   case '1':
//   case '2':
//     console.log('Сейчас зима');
//     break;
//   case '3':
//   case '4':
//   case '5':
//     console.log('Сейчас весна');
//     break;
//   case '6':
//   case '7':
//   case '8':
//     console.log('Сейчас лето');
//     break;
//   case '9':
//   case '10':
//   case '11':
//     console.log('Сейчас осень');
//     break;
//   default:
//     console.log('ты ввел не верное значение');
//     break;
// }

// Задача 5

// let number = prompt('Пожалуйста, введите любое число');

// if (isNaN(number)) {
//   console.log('Вы ввели не число');
// } else if (number % 2 === 0) {
//   alert('Четное число')
// } else {alert('Нечетное число')}; 

// Задача 7

// let iOS = 0;
// let anDroid = 1;
// let clientOS = Number(prompt('Введите 0, если у вас iOS или 1, если стоит Android'));
// if (clientOS === 0) {
//   alert('Установите версию приложения для iOS по ссылке')
// }  else {
//   alert('Установите версию приложения для Android по ссылке')
// }
// Или через тернарный оператор:

// let download = (clientOS === 0) ? alert('Установите версию приложения для iOS по ссылке') : alert('Установите версию приложения для Android по ссылке');


// Задача 8

// let iOS = 0;
// let anDroid = 1;
// let clientOS = Number(prompt('Введите 0, если у вас iOS или 1, если стоит Android'));
// let clientDeviceYear = Number(prompt('Укажите год произвства вашего мобильного устройства'));
// if (clientOS === 0 && clientDeviceYear >= 2015) {
//   alert('Установите приложение для iOS по ссылке')
// } else if (clientOS === 0 && clientDeviceYear < 2015)
// {alert('Установите облегченную версию приложения для iOS по ссылке')  
// } else if (clientOS === 1 && clientDeviceYear >= 2015) {
//   alert('Установите приложение для Android по ссылке')
// } else {alert('Установите облегченную версию приложения для Android по ссылке')  
// }

// Задача 9