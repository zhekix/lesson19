// const root = document.getElementById('root');

// const tdAll = document.querySelectorAll('table td');
// tdAll.forEach(td => {
//   td.onclick = function(e) {
//     e.target.classList.toggle('active');
//   }
// });

// делегирование событий
// const table = document.querySelector('table');
// table.onclick = function(e) {
//   if (e.target.tagName === "TD") {
//     e.target.classList.toggle('active');
//   } else {
//     let td = e.target.closest('td');
//     td.classList.toggle('active');
//   }
// }

const button = document.querySelector('button');
button.onclick = function () {
  // e.stopPropagation(); // остановка всплытия
  console.log('клик по button');
};

document.body.onclick = function () {
  console.log('клик по body');
};

// поиск тега html
document.documentElement.onclick = function () {
  console.log('клик по html');
};

// перехват capturing
// событие event
// всплытие bubbling

// event - bubbling
// capturing - event

// button.addEventListener('click', function(){
//   console.log("клик по button с помощью addEventListener");
// }, true);
// document.body.addEventListener('click', function(){
//   console.log("клик по body с помощью addEventListener");
// }, true);
// document.documentElement.addEventListener('click', function(e){
//   // e.stopPropagation();
//   console.log("клик по html с помощью addEventListener");
// }, true);


// hoisting
// variables: a
// function: foo

// console.log(a); // undefined
// var a = 10;

// console.log(b); // undefined
// var b = 5;

// foo();

// function foo() {
//   a = 4;
//   console.log(a, b); // 4 5
//   var a;
// }

// console.log(a); // 10

// console.log(aaa); // ошибка
// const aaa = 10;


// hoisting
// varibles: bar

// bar(); // bar is not a function

// var bar = () => {
//   console.log("bar");
// }

// lint
// eslint

const name = 'Женя';
const a = 10;

console.log(name);
console.log(a);

// чистые функции


const object = {

};
