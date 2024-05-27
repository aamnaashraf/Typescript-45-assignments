"use strict";
// Exercise 37 ( Large Shirts)
function make_shirt(size = "Large", message = "I love Typescript!") {
    console.log(`Making a ${size} T-shirt with the messeage "${message}" printed on it.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love Python!");
