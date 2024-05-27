"use strict";
// Exercise 24
// Equality and inequality test 1 
console.log("Equality test with strings:", "Apple" === "Apple");
// Equality and inequality test 2
console.log("Inequality test with strings:", "Apple" === "Orange");
// Test using the lower case function 1
console.log("Lower case function test:", "Apple".toLowerCase() === "apple");
// Test using the lower case function 2
console.log("Lower case function test:", "Apple".toLowerCase() === "Apple");
//Numerical tests involving equality 
console.log("Equality test with numbers:", 23 === 23);
// Numerical test involving inequality
console.log("Equality test with numbers:", 23 !== 23);
// greater than test
console.log(" greater than tes:", 10 > 5);
// less than test
console.log(" greater than tes:", 10 < 5);
// Grerater than or equal to test
console.log("Greater than or equal to test", 10 >= 10);
// Less than or equal to test
console.log("Less than or equal to test", 10 <= 5);
// test using And Operator
console.log(" Amd Operator test:", 4 === 4 && 10 > 5);
// test using or operator
console.log("Or Operator test:", 3 !== 3 || 4 > 6);
// Test whether an item is in a array
const fruits = ["Apple", "Banana", "Orange", "Pear"];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
// Test whethet an item is not in an Array
console.log('Test "Grapes" not in the array: ', fruits.includes("Grapes"));
