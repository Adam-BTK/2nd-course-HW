// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));

// let max = a;
// if (max < b) {
//     console.log(`Максимальное число ${max}`);
// }

// let timeOfwork = String('Могу ли я идти?');

// timeOfwork = timeOfwork.toLocaleLowerCase();

// (timeOfwork >= 4 && timeOfwork >= 8) ? console.log('Можешь идти домой');
// 

// if (day === 'понедельник') {
//   console.log('Первый день недели');
// } else if (day === 'вторник') {
//   console.log('Второй день недели');
// } else if (day === 'среда') {
//   console.log('Третий день недели');
// } else if (day === 'четверг') {
//   console.log('Четвертый день недели');
// } else if (day === 'пятница') {
//   console.log('Пятый день недели');
// } else if (day === 'суббота') {
//   console.log('Шестой день недели');
// } else if (day === 'воскресенье') {
//   console.log('Седьмой день недели');
// } else {
//   console.log('Такого дня недели не существует!');
// }

// let day = prompt('Введите день недели');

// switch (day) {
//   case 'понедельник':
//     console.log('Первый день недели')
//     break;
//   case 'вторник':
//     console.log('Второй день недели')
//     break;
//   case 'среда':
//     console.log('Третий день недели')
//     break;
//   case 'четверг':
//     console.log('Четвертый день недели')
//     break;
//   case 'пятница':
//     console.log('Пятый день недели')
//     break;
//   case 'суббота':
//     console.log('Шестой день недели')
//     break;
//   case 'воскресенье':
//     console.log('Седьмой день недели')
//   default:
//   console.log('ты ввел не верное значение');
//     break;
// }


// Домашка 4 Циклы разные примеры

// Task 3: Count Even Numbers  from Chat
// Write a loop that counts and prints the number of even numbers between 1 and 50.

// let sum = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }  
// }

// console.log("The sum of even numbers from 1 to 50 is:", sum);


// let n = 1000;
// let num = 0;

// for (let i = n; i > 50; i /= 2) {
//   console.log(i);
//   num++;
// }

// console.log("Number of iterations:", num);




// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log('Привет!');
// } while (false);



// let isQueueEmpty = true;
// let dontWantToWait = true;

// while (!isQueueEmpty) { // Пока очередь перед нами не пуста
// 	if (dontWantToWait) { // Если ждать надоело
// 		console.log("Вы устали ждать и покинули очередь.");
// 		break; // Прерываем ожидание и уходим
// 	}
// 	console.log('Давайте подождем еще'); 
// }

// let i = 0; // задаем начальное значение счетчика
// let sum = 0; // объявляем переменную, в которой будем хранить сумму
// while(i < 10) { // проверяем, что счетчик меньше 10
// 	i++; // увеличиваем счётчик на 1
// 	if (i % 4 === 0) { // проверяем, что счётчик кратен 4
// 		continue; // если кратен, то код ниже выполнен не будет
// 	}
// 	sum += i; // увеличиваем сумму на текущий счётчик,
// 	// если i будет кратно 4, эта строка не выполится
// }

// console.log(sum);

// while(true) { // бесконечный цик
// 	const msg = prompt('Введите сообщение'); // сообщение от пользователя
// 	// if (msg === 'continue') { // если continue
// 	// 	continue; // код ниже не выполнится, переходим к следующему шагу цикла
// 	// }
// 	console.log(msg); // выводим сообщение пользователя
// 	if (msg === 'break') { // если break
// 		break; // прекращвем выполнение цикла
// 	}
// }

// let monthNumber = 1;

// while (monthNumber <= 12) {
//     if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
//         console.log('Зима');
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//         console.log('Весна');
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//         console.log('Лето');
//     } else if (monthNumber >= 9 && monthNumber <= 11) {
//         console.log('Осень');
//     }
// 	monthNumber++; // Увеличиваем значение monthNumber для следующего шага на 1
// }

// let i = -1;

// while (i < 15) { 
// 	console.log(i);
// i++;
// }

// let i = -10; 
// for (; i <= 10; i++) { 
//   console.log(i);
//  }


// Объявляем переменную dayNumber, которая равна номеру дня в месяце
// for (let dayNumber = 2; dayNumber <= 31; dayNumber++) { 
//   // Каждый день проверяем, является ли он третьим (выходным)
// 	if (dayNumber % 3 == 0) {
//     // Выводим сообщение
// 		console.log("Сегодня отдыхаем!"); 
//     // Ждем следующий день
// 		continue; 
// 	}
// 	console.log("Рабочий день, братец. Вот тебе план работ:..."); 
//   // Если проверка не прошла и день не выходной, выводим сообщение
// }


// const country = {
// 	'Лима': 'Перу',
// 	'Джакарта': 'Индонезия',
// 	'Анкара': 'Турция',
// 	'Париж': 'Франция',
// 	'Канберра': 'Австралия'
// };

// for (let key in country) { 
//       console.log(key);
//       /* с помощью конструкции country[capital] мы получаем значение объекта
//        по его ключу */
//   }


// const user = { // создаем объект user
// 	name: 'Ivan',
// 	age: 25,
// 	city: '', // пустое свойство city
// 	email: 'ivan@vanya.com'
// };

// for (key in user) { // перебираем объект
// 	if (user[key]) { // если свойство не пустое
// 		console.log('${key}: ${user[key]}'); // выводим ключ: значение
// 	}
// }
  

// let i = 0;

// while (i < 6) {
// 	console.log(i);
// 	i++;
// }

// let i = 0;

// do {
//   console.log(i);
// 	i++;
// } while (i < 3);


// Задача с выводом каждой пятницы как отчетного дня

// const dayOfreport = 5;
// const lastDayOfMonth = 31;

// for (let i = dayOfreport; i <= lastDayOfMonth; i++) {
//   if ((i - dayOfreport) % 7 === 0) {
//     console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
//   }  
// }

// Certainly! Let's break down the condition (i - dayOfreport) % 7 === 0 and understand how it checks if i represents a multiple of 7 days, corresponding to Fridays.

// (i - dayOfreport) calculates the difference between i and dayOfreport.

// This subtraction gives us the number of days that have passed since dayOfreport. For example, if dayOfreport is 5 (Friday), and i is 12, then (i - dayOfreport) would be 7, indicating that 7 days have passed since the start (Friday to the following Friday).

// (i - dayOfreport) % 7 calculates the remainder when the difference is divided by 7.

// The modulus operator % returns the remainder of the division operation. In this case, we divide the difference by 7 to determine how many complete sets of 7 days (weeks) have passed. The remainder gives us the number of days beyond the complete weeks. For example, if (i - dayOfreport) is 14, then (i - dayOfreport) % 7 would be 0 since 14 is evenly divisible by 7 (2 weeks).

// (i - dayOfreport) % 7 === 0 checks if the remainder is equal to 0.

// By comparing the remainder to 0, we determine if the number of days since dayOfreport is a multiple of 7. If the remainder is 0, it means that i represents a day that falls exactly on a multiple of 7 days (a Friday). Thus, the condition (i - dayOfreport) % 7 === 0 evaluates to true only for Fridays.

// By using this condition within the if statement, we can identify and log the statement for each Friday within the given range.