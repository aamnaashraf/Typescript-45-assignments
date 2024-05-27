//question 2
var PersonName = "ERIC";
console.log("Hello ".concat(PersonName, " would you like to learn some python today?"));
// question 3
var personName = "Aamna";
console.log("lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\)bw/g, function (c) { return c.toUpperCase(); }));
// question 6
var person = "\n\t Aamna Ashraf Rajput \t\n";
console.log(person);
var stripped = person.trim();
console.log(stripped);
