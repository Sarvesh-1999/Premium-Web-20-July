// ! FUNCTIONS

//! 1) NAMED FUNCTION: function which has name
//! NOTE : function hoisting is only possible in named function

// greet(); // <-- due to hoisting
// function greet() {
//   console.log("I am Named Function");
// }
// greet();

//! 2) ANONYMOUS FUNCTION : without name
// function (){
//     console.log("I am Anonymous function");
// }

//! 3) FUNCTION EXPRESSION : used to call anonymous function
// const f1 = function () {
//   console.log("I am Anonymous function");
// };
// f1();

//! 4) FUNCTION WITH ARGUEMENTS AND PARAMETERS
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(5, 7);

//! 5) RETURN TYPE FUNCTION
// function multiply(n1 = 1, n2 = 1) {
//   let value = n1 * n2;
//   return value; // 25
// }

//! WAY 1
// let result = multiply(5, 5);
// console.log(result); // 25

//! WAY 2
// console.log(multiply(5, 5));

//! 6) NESTED FUNCTION
// function Parent() {
//   console.log("I am Parent");

//   function Child() {
//     console.log("I am Child");
//   }

//   Child();
// }

// Parent();

//! EXAMPLE 1
// console.log("Start");
// function Parent() {
//   let money = 3000;
//   console.log("Parent", money);

//   function Child() {
//     let saving = 100;
//     console.log("Child", saving);
//   }

//   Child();
// }
// Parent();
// console.log("end");

//! EXAMPLE 2
// closure is a temporary memory which is created when child function having an access of parent function's properties and it gets distroyed after the execution of child function.

// console.log("Start");
// function Parent() {
//   let money = 3000;
//   console.log("Parent", money);

//   function Child() {
//     let saving = 100;
//     console.log("Child", saving + money); // from closure
//   }

//   Child();
// }
// Parent();
// console.log("end");

//! 7) HIGHER ORDER FUNCTION AND CALLBACK FUNCTION

//! HOF : A function which can return another function OR can accept a function as an arguement OR both

//! CALLBACK : A function which is passed as an arguement

// condition 1
function HOF1() {
  return function () {};
}

// condition 2
function HOF2(x) {}
HOF2(function () {});
