// /===========================================================
//1 (map()) Потрібно отримати масив імен студентів та записати їх великими літерами.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const names = studentRecords.map(({ name }) => name.toUpperCase());

// console.log(names);

// /===========================================================
// 2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const goodScrores = studentRecords.filter(function ({ marks }) {
//   return marks > 50;
// });
// console.log(goodScrores);
// /===========================================================
// 3  (reduce()) Необхідно одержати загальну суму балів студентів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const totalMarks = studentRecords.reduce((acc, { marks }) => acc + marks, 0);
// console.log("totalMarks:", totalMarks);
// /===========================================================
// 4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const goodScore = studentRecords
//   .filter(function ({ marks }) {
//     return marks > 50;
//   })
//   .map(({ name }) => name);
// console.log(goodScore);

// /===========================================================
// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const totalBestScores = studentRecords
//   .filter(function ({ id }) {
//     return id > 120;
//   })
//   .reduce((acc, { marks }) => acc + marks, 0);
// console.log(totalBestScores);
// /===========================================================
//6 (map(), filter(), reduce()) Необхідно вивести загальну кількість студентів із балами
//більше 50, отриманими після нарахування заохочення до 15 балів.
//Використовуючи map(), додається заохочення до 15 балів студентам, які набрали менше 50 балів.
// Потім використовуємо filter() для масиву студентів, що повертається функцією map().
// Так ми знайдемо всіх студентів із відмітками понад 50.
// Нарешті ми використовували функцію reduce() для повертаного функцією filter()
// масиву студентів, щоб повернути суму оцінок.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const marksSum = studentRecords
//   .map((el) => {
//     if (el.marks < 50) {
//       el.marks += 15;
//     }
//     return el;
//   })
//   .filter(function ({ marks }) {
//     return marks > 50;
//   })
//   .reduce((acc, { marks }) => acc + marks, 0);
// console.log("marksSum:", marksSum);
// /===========================================================
//Напишіть код, який відсортує масив об'єктів litmir за значенням title.

// var litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// const name = [...litmir].sort((a, b) => b.title.localeCompare(a.title));
// console.log("name:", name);

// /===========================================================
// Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function (userName, age, numbersOfPost) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;
// };

// User.prototype.getInfo = function () {
//   return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій`;
// };

// const newUser = new User(`Garry`, 18, 5874);

// console.log(newUser.getInfo());
// /===========================================================
//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
  get getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

// const worker = new Worker("Іван", "Іванов", 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31

//Напишіть новий клас Boss, цей клас успадковується від класу Worker та минулого
//завдання. З'являється нові властивості: workers - кількість працівників.
//І зарплата вважається інакше: добуток (множення) ставки rate на кількість
//відпрацьованих днів і кількість працівників.

// class Boss extends Worker {
//   constructor(name, surname, rate, days, workers) {
//     super(name, surname, rate, days);
//     this.workers = workers;
//   }
//   getSalary() {
//     return this.rate * this.days * this.workers;
//   }
// }

// const boss = new Boss("Іван", "Іванов", 10, 31, 10);
// console.log(boss.name); //Виведе 'Іван'
// console.log(boss.surname); //Виведе 'Іванов'
// console.log(boss.getFullName); //Виведе 'Іванов Іван'
// console.log(boss.rate); //Виведе 10
// console.log(boss.days); //Виведе 31
// console.log(boss.workers); //Виведе 10
// console.log(boss.getSalary()); //Виведе 3100 - тобто 10 * 31 * 10

// /===========================================================
//Виводимо кнопку з текстом "Змінити" і два інпути, при натисканні на кнопку інпути
//змінюються своїм введеним текстом
// const input1El = document.getElementById(`js-input1`);
// const input2El = document.getElementById(`js-input2`);
// const button = document.querySelector(`.btn`);

// button.addEventListener(`click`, onBtnPress);

// function onBtnPress() {
//   const transferValue = input1El.value;
//   input1El.value = input2El.value;
//   input2El.value = transferValue;
// }
// /===========================================================
console.log(`Hello World`);

console.log("sum", 23 + 87);
