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

// // condition 1
// function HOF1() {
//   return function () {};
// }

// // condition 2
// function HOF2(x) {}
// HOF2(function () {});

//! 8) IIFE (IMMEDIATE INVOKED FUNCTION EXPRESSION)
// we can call IIFE only once.
// (function () {
//   console.log("IIFE");
// })();

//! 9) ARROW FUNCTION : introduced in ES6 --> for shorter syntax
// const f1 = () => {
//   console.log("I am Arrow Func 1");
// };
// f1();

// const f2 = () => console.log("I am Arrow Func 2");
// f2();

// // EXPLICIT
// const f3 = (n1, n2) => {
//   return n1 + n2;
// };
// console.log(f3(10, 2));

// // IMPLICIT
// const f4 = (n1, n2) => n1 + n2;
// console.log(f4(10, 20));

//! ARRAYS
// const arr1 = [10, 20, 30, 40, 50];
// //             0   1   2   3   4
// console.log(arr1);
// console.log(arr1[1]); // 20
// console.log(arr1.length); // 5 <--- length property

//! ARRAY METHODS
// const arr2 = [10, 20, 30];
// console.log(arr2);

// //! push()
// arr2.push(40, 50);
// console.log(arr2);

// //! pop()
// arr2.pop();
// console.log(arr2);

// //! unshift()
// arr2.unshift(100, 200, 300);
// console.log(arr2);

// //! shift()
// arr2.shift();
// console.log(arr2);

//! slice()
// const arr3 = [100, 200, 300, 400, 500];

// console.log(arr3.slice(2, 4));
// console.log(arr3.slice(-3, -1));
// console.log(arr3.slice(-3, 4));

// //! splice()
// const arr4 = [10, 20, 30, 40, 50];

// arr4.splice(1, 2);
// console.log(arr4);

//! forEach()
// const arr5 = [10, 20, 30, 40, 50];

// let val1 = arr5.forEach((ele, idx, arr) => {
//   return ele + 5;
// });
// console.log(val1); // ud

// //! map()
// let val2 = arr5.map((ele, idx, arr) => {
//   return ele + 5;
// });
// console.log(val2); // [15, 25, 35, 45, 55] <-- new array

// //! filter()
// let val3 = arr5.filter((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val3); // [30, 40, 50] <-- new filtered array

// //! find()
// let val4 = arr5.find((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val4); // 30

// //! findIndex()
// let val5 = arr5.findIndex((ele) => {
//   return ele > 20;
// });
// console.log(val5); // 2

// //! reduce()
// let val6 = arr5.reduce((sum, ele) => {
//   return sum + ele;
// }, 0);
// console.log(val6);

//! ARRAY DESTRUCTURING
// let arr1 = [10, 20, 30, 40, 50];

// let [a1, a2, a3, a4, a5] = arr1;
// console.log(a2, a5);

// // skipping values
// let [, , b1, , b2] = arr1;
// console.log(b1, b2);

// //! nested array
// let arr2 = [100, 200, 300, [1000, 2000, 3000]];
// let [, x1, x2, [x3, , x4]] = arr2;
// console.log(x1, x2, x3, x4); // 200 300 1000 3000

//! OBJECTS

// //! CREATE AN OBJECT
// const obj1 = {
//   id: 1,
//   name: "John",
//   age: 20,
//   isAuthenticated: false,
//   company: null,
// };
// console.log(obj1);

// //! READ
// console.log(obj1.name); // John
// console.log(obj1.salary); // undefined

// //! UPDATE
// obj1.isAuthenticated = true;
// console.log(obj1);

// //! ADD NEW PROPERTY
// obj1.dob = "01/01/2026";
// obj1.dummy = "dummyKey"
// console.log(obj1);

// //! DELETE
// delete obj1.dummy
// console.log(obj1);

//! OBJECT DESTRUCTURING
// const obj2 = {
//   firstname: "Jane",
//   lastname: "Doe",
//   age: 26,
//   company: "HCL",
// };

// let { company, salary = "NA", firstname: fname, address: loc = "NA" } = obj2;
// console.log(company, salary, fname, loc);

// const obj3 = {
//   name: "John",
//   address: {
//     city: "Noida",
//     state: "UP",
//     coordinates: { lat: "9876543487656", long: "0987654345678" },
//   },
// };
// // city , long

// let {
//   address: {
//     city,
//     coordinates: { long },
//   },
// } = obj3;
// console.log(city, long);

//! PROMISE : A JavaScript Promise is an object representing a placeholder for a value that you don’t have yet, but expect to receive in the future.

// let p1 = fetch("https://dummyjson.com/todos");

// p1.then((resp) => {
//   let p2 = resp.json();

//   p2.then((data) => {
//     console.log(data.todos);
//   });

//   p2.catch((error) => {
//     console.log(error);
//   });
// });

// p1.catch((error) => {
//   console.log(error);
// });

//! ASYNC AND AWAIT FUNCTIONS
// Async/Await is a newer, cleaner way to read and write Promises. Instead of linking long chains of .then(), it makes your asynchronous code look like normal, step-by-step code.

// async: Put this keyword before a function to tell JavaScript: "Expect time-consuming tasks inside this function".

// await: Put this keyword before a Promise to tell JavaScript: "Pause right here and wait for the data to arrive before moving to the next line"

async function getTodos() {
  try {
    let resp = await fetch("https://dummyjson.com/todos");
    let data = await resp.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getTodos();


