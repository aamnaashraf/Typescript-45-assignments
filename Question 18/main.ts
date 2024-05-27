// Exercise 18 ( seeing the world)
//Store the locations in a array. Make sure that the array is not in alphabetical order
let places: string[] =["Pakistan" , "Turkey" , "Germany" , "Italy" , "Eifel Tower"]

//Print your array in its original order
console.log(places);

// Print your array in alphabetical order with out modifying its actual list
console.log([...places].sort());

//Show that your array is still in its original position by printing it
console.log(places);

//Print your array in reverse alphabetical order wiyh out changing the order of the original list
console.log([...places].sort().reverse());

//Show that your array is still in its original position by printing it
console.log(places);

//Reverse the order of your list.Print the array to show that its order has been changed
console.log(places.reverse());

//Reverse the order of your list again. Print the list to show that it's back to its original order
console.log(places.reverse());

// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed
console.log(places.sort());

//Sort to change your array so it's stored in reverse alphabetical order.  Print the list to show that its order has been changed
console.log(places.sort().reverse());
