/**
 - TOKENS : smallest unit of every programming language
 - There are 4 types of tokens

 1) keywords : reserved words which has specific meaning. ex- if,else,var,let,const etc

 2) identifiers : name given to a variables, methods, functions, class 

 3) literals : data stored in a variable

 4) operators : symbol used to perform specific operations between operands

 IN JAVA :-  int a = 10
 IN JS :- var a = 10 || let b = 20 || const c = 30

 DATATYPES :  Type of data which is stored in a variable
 - There are 2 types of datatypes

 1) PRIMITIVE (immutable || call by value) : There are 7 types
    - number
    - string
    - boolean
    - undefined
    - null
    - bigint
    - symbol

 2) NON-PRIMITIVE (mutable || call by reference) : There are 3 types
    - array
    - object
    - function
 */

//! MUTABLE VS IMMUTABLE
// var arr = [10, 20, 30];
// arr[0] = 50;
// console.log(arr); // [50, 20, 30]; <-- mutable

// var str = "Hello";
// str[0] = "X";
// console.log(str); // Hello <-- immutable

//! HOW TO CHECK DATATYPE OF ANY VALUE : typeof variableName
// var a1 = 10.109;
// console.log(typeof a1); // number

// var a2;
// console.log(a2); // undefined
//! undefined :  variable is declared without initialization.
//! not defined : its an error which occur when we try to access a variable which in not declared.

//! null : null means empty, intentionally provided by the developer to keep varaible empty
// var a3 = null;
// console.log(a3, typeof a3); // null object

//! Any no which is greater that this range (-2^53 - 1 to 2^53 - 1) cannot be displayed accurately in console, then convert it into bigint

// var a4 = 999999999999999999999999999999999n;
// console.log(a4, typeof a4);

// var a5 = Symbol("Hello");
// var a6 = Symbol("Hello");
// console.log(a5);
// console.log(a6);
// console.log(a5 == a6);

// console.log(10 == "10"); // true <-- loosely comparison
// console.log(10 === "10"); // false <-- strictly comparison

//! HOISTING : moving declaration part at the top of the code internally

// // var a = ud <--- hoisted and intialized with ud
// console.log(a); // ud
// var a = 10;
// console.log(a); // 10

// // let b <---- Hoisted but cannot initailized due to Temporal Dead Zone (TDZ)
// console.log(b); // error
// let b = 20;
// console.log(b); // 20

//! VAR EXAMPLE
// var a; //<---------------- declare
// console.log(a); // ud
// a = 10; //<--------------- initialize
// console.log(a); // 10
// var a; //<---------------- re-declare
// console.log(a); // 10
// a = 20; //<--------------- re-initialize
// console.log(a); // 20

// var b = 10; //<----------- declare & initialize
// console.log(b); // 10
// var b = 30; //<----------- re-declare & re-initialize
// console.log(b); // 30

//! LET EXAMPLE
// let b;
// console.log(b); // ud
// b = 100;
// console.log(b); // 100
// // let b; //! SyntaxError: Identifier 'b' has already been declared
// console.log(b); // 100
// b = 200;
// console.log(b); // 200

// let c = 300;
// console.log(c);
// // let c = 400; //! SyntaxError: Identifier 'c' has already been declared
// console.log(c);

//! SCOPES EXAMPLE

//! GLOBAL VARIABLES AND SCOPE EXAMPLES
// var a = 10; // GLOBAL VARIABLE - GLOBAL SCOPE
// let b = 20; // GLOBAL VARIABLE - SCRIPT SCOPE <- (TDZ)
// const c = 30; // GLOBAL VARIABLE -  SCRIPT SCOPE <- (TDZ)

// //! LOCAL VARIABLES AND SCOPES EXAMPLES
// // in conditional OR loops (both same)
// if (10 < 20) {
//   var x = 100; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let y = 200; // LOCAL VARIABLE - BLOCK SCOPE
//   const z = 300; // LOCAL VARIABLE - BLOCK SCOPE
// }

// in functions
// function demo() {
//   var m = 1000; // LOCAL VARIABLE - LOCAL SCOPE
//   let n = 2000; // LOCAL VARIABLE - LOCAL SCOPE
//   const o = 3000; // LOCAL VARIABLE - LOCAL SCOPE
// }
// demo();

//! FUNCTIONS :  BLOCK OF CODE USED TO PERFORM SPECIFIC TASK
// DRY PRINCIPLE  -> DONOT REPEAT YOURSELF

//! 1) NAMED FUNCTION :  Function which has name
//! NOTE: Only named function can be called before declaration (Hoisting)

// webDevelopment(); // due to hoisting

// function webDevelopment() {
//   console.log("HTML");
//   console.log("CSS");
//   console.log("JS");
// }
// webDevelopment();

//! 2) ANONYMOUS FUNCTION : Function without name
// function (){
//    console.log("I am Anonymous");
// }

//! 3) FUNCTION EXPRESSION : Used to call Anonymous function
// const f1 = function () {
//   console.log("I am Anonymous called using Function Expression");
// };
// f1();

//! 4) FUNCTION WITH ARGUEMENTS AND PARAMETERS
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20); // here, 10 and 20 are arguements

//! 5) RETURN TYPE FUNCTION
// function multiply(n1 = 1, n2 = 1) {
//   let val = n1 * n2;
//   return val; // 25
// }
// //! way 1
// let x = multiply(5, 5);
// console.log(x); //  25

//! way 2
// console.log(multiply(5, 5));

//! 6) HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
//! HOF : a function which returns another function OR accepts a function as arguement OR both.

//! CB : a function which passes as an arguement to another function
// function HOF(cb) {
//   return function B() {};
// }
// HOF(function A() {});

//! 7) NESTED FUNCTION :

// closure is a temporary memory which is created when child function having an access of parent function's properties and it gets distroyed after the execution of child function.

// function Parent() {
//   let money = 1000;
//   console.log("I am Parent", money);

//   function Child() {
//     console.log("I am Child", money); // due to closure (Parent)
//   }

//   Child();
// }

// Parent();

//! 8) Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("I am IIFE");
})();

//! 9) ARROW FUNCTION
const a1 = () => {
  console.log("Arrow func");
};
a1();

const a2 = () => console.log("Hii");
a2();

// EXPLICIT
const a3 = () => {
  return "Explicit";
};
console.log(a3());

// IMPLICIT
const a4 = (n1, n2) => n1 + n2;
console.log(a4(10, 20));
