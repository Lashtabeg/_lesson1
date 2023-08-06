//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
  /* <div class="item"> 
  <h3>Заголовок</h3>
  <p>текст текст текст</p>
  </div> */
}
{
  /* <button class="add-btn">add</button>
    <div class="container"></div> */
}

// const btn = document.querySelector(".add-btn");
// const div = document.querySelector(".container");

// btn.addEventListener("click", onClickEvent);

// function onClickEvent() {
//   const divEle = document.createElement("div");
//   const divHead = document.createElement("h3");
//   const divPara = document.createElement("p");
//   divEle.classList.add("item");
//   divHead.textContent = "Заголовок";
//   divPara.textContent = "текст текст текст";
//   divEle.append(divHead, divPara);

//   div.insertAdjacentElement("beforeend", divEle);
// }

// function onClickEvent() {
//   const divEle = `<div class="item">
//     <h3>Заголовок</h3>
//     <p>текст текст текст</p>
//     </div>`;
//   div.insertAdjacentHTML("beforeend", divEle);
// }

/////////////////////////////////////////////////
//При натисканні на кнопку міняти фоновий колір елемента з класом .play на прозорий.
//Примітка: використовуйте CSS-властивість opacity.

/* <button class="add-btn">add</button>
      <div class="play"></div> */

/* <style>
    .play {
      background: pink;
    }
  </style> */
// const btn = document.querySelector(".add-btn");
// const div = document.querySelector(".play");
// let opac = 1;
// btn.addEventListener("click", onClickEvent);

// function onClickEvent() {
//   opac -= 0.1;
//   div.style.opacity = opac;
// }

/////////////////////////////////////////////////
/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
   </div>
*/

// const alertButton = document.querySelector("#alertButton");
// const alertInput = document.querySelector("#alertInput");

// alertButton.addEventListener("click", onClickEvent);

// function onClickEvent() {
//   const value = alertInput.value;
//   alert(value);
// }
/////////////////////////////////////////////////
/*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>
*/
// const passwordButton = document.querySelector("#passwordButton");
// const passwordInput = document.querySelector("#passwordInput");

// passwordButton.addEventListener("click", onClickEvent);
// function onClickEvent() {
//   if (passwordInput.type === "password") {
//     passwordInput.disabled = true;
//     passwordButton.textContent = "Приховати";
//     return (passwordInput.type = "text");
//   }
//   passwordInput.type = "password";
//   passwordButton.textContent = "Розкрити";
//   passwordInput.disabled = false;
// }

// function onClickEvent() {
//   const toggle = passwordInput.type === "password";
//   passwordInput.disabled = toggle;
//   passwordInput.type = toggle ? "text" : "password";
//   passwordButton.textContent = toggle ? "Приховати" : "Розкрити";
// }

/////////////////////////////////////////////////
/* ---------------------------------*/

// Напишіть інтерфейс створення списку.
//Для кожного пункту:

// Запитуйте вміст пункту користувача за допомогою prompt.
// Створюйте елемент <li> і додайте його до <ul>.
// Процес переривається, коли користувач натискає вводить порожній рядок.
// Усі елементи мають створюватися динамічно.

// const ulList = document.querySelector(".list");
// const newItems = [];
// let promText = "";
// do {
//   promText = prompt("Введіть Текс");
//   if (promText) {
//     const liItem = `<li>${promText}</li>`;
//     newItems.push(liItem);
//   }
// } while (promText);
// ulList.insertAdjacentHTML("beforeend", newItems.join(""));
/////////////////////////////////////////////////
/* ---------------------------------*/
//Вивести 4 червоні квадрати, при кліку на будь-який, він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще хоч 100 квадратів, при цьому скрипт не
//треба міняти).

// const squares = document.querySelectorAll(".square");

// for (let square of squares) {
//   square.addEventListener(`click`, onSqrClick);
// }

// function onSqrClick(event) {
//   for (let square of squares) {
//     if (square.classList.contains("green")) {
//       square.classList.remove("green");
//       break;
//     }
//   }
//   event.target.classList.add("green");
// }

// const wrapper = document.querySelector(".wrapper");
// const square = document.querySelector(".square");
// wrapper.addEventListener(`click`, onSqrClick);

// function onSqrClick(event) {
//   if (!event.target.classList.contains("square")) {
//     return;
//   }
//   for (let square of wrapper.children) {
//     if (square.classList.contains("green")) {
//       square.classList.remove("green");
//       break;
//     }
//   }
//   event.target.classList.add("green");
// }

/////////////////////////////////////////////////
/* ---------------------------------*/
//Виводимо червоний квадрат, при наведенні на нього він стає зеленим, а коли відводимо
//курсор від нього, назад червоним.
//mouseover/mouseout

// const square = document.querySelector(".square");

// square.addEventListener("mouseover", onMouseOven);
// square.addEventListener("mouseout", onMouseOut);

// function onMouseOven(event) {
//   event.target.classList.add("green");
// }

// function onMouseOut(event) {
//   event.target.classList.remove("green");
// }
/* ---------------------------------*/
/*
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
const btn = document.getElementById(`double`);
const ulList = document.querySelector(`.list`);

btn.addEventListener("click", onDouble);

function onDouble(even) {
  const liItem = ulList.children;
  liItem.__proto__.forEach = [].forEach;
  liItem.forEach((element) => {
    element.textContent *= 2;
  });
}
