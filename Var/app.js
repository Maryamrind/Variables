"use strict";
// Variables
Object.defineProperty(exports, "__esModule", { value: true });
// Advance Variables
// 1. let and const
let current_Balance = 3000; //This value can change 
const account_Number = 987654321; //This value can not change
current_Balance = 5000; //This is allowed
// account_Number = 123456789 //tHIS IS NOT ALLOWED
// Variable declaration
// 1. Declare a variable of name of type string and assign it a value
let welcome = `Welcome to the TypeScrip`;
console.log(welcome);
//2. Declare a variable of age of type number and assign it a value
let age = 23;
//  change the variable of age
age = 24;
console.log(age);
//3. Declare a variable of isMarried of type boolean
let isMarried = false;
console.log(isMarried);
//  Concatination
//1. Declare two variables of firstname,lastname of type string and assign it the concatination
let firstName = "Maryam";
let lastName = "Rind";
let fullName = firstName + " " + lastName;
console.log(fullName);
//2. Declare two variables greeting ,name and message of type string and assign it the concatination
let greeting = "Hello";
let person_name = "Maryam Rind";
let message = greeting + " " + person_name;
console.log(message);
// Data Types
//1. Declare a variable num of type number and assign it the value
let num = 10;
console.log(num);
//2. Declare a variable str of type string and assign it the value
let str = "Free Palestine";
console.log(str);
//3. Declare a variable bool of type boolean and assign it the value
let bool = true;
console.log(bool);
// Primitive Data Types
//1. Declare a variable num of type number and assign it the value 
let num1 = 3.14 * 2;
console.log(num1);
//2. Declare a variable str of type string and assign it the value
let str1 = "Hello" + " " + "World";
console.log(str1);
//3. Declare a variable bool of type boolean and assign it the value
let bool1 = 6.28 > 5;
console.log(bool1);
//4. Declare a variable nullValue of type null and assign it the value
let nullValue = null;
console.log(nullValue);
//5. Declare a variable undefValue of type undefined and assign it the value
let undefValue = undefined;
console.log(undefValue);
// 6. Declare a variable anyValue of the type any and assign it the value
let anyValue = "Hello world";
console.log(anyValue);
// Type assertion
let num2 = 26;
let num3 = num1;
console.log(typeof (num2));
// Variable decleration using var,let and const.
let my_name = "Maryam Anwar";
var user_name = "Rind Baloch";
const PI = 34567;
console.log(my_name + " " + user_name + " " + "got" + " " + PI + " " + "marks in exam");
// Todo String Template:
// ? Declare variable product and price of type string and number, respectively create string using template literals to display the product and its price in the format product{product} is price at {price} dollars.
let Product = "Dress";
let Price = 7000;
console.log(`The Prce of ${Product} is ${Price} Rupees only`);
