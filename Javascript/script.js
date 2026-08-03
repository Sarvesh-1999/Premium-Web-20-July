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

// var a = ud <--- due to hoisting
console.log(a); // ud
var a = 10
console.log(a); // 10

