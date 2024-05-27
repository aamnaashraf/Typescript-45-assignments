//question 2
let PersonName: string="ERIC";
console.log(`Hello ${PersonName} would you like to learn some python today?`);

// question 3
let personName: string= "Aamna";
console.log("lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\)bw/g,c =>c.toUpperCase()));

// question 6
let person: string= `\n\t Aamna Ashraf Rajput \t\n`;
console.log(person);
let stripped: string= person.trim();
console.log(stripped);
