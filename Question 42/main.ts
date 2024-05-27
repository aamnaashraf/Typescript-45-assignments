// Exercise 42 (great Magicians)
let magician:string[] = ["Harry Potter" , "Hermione Granger" , "Ron Weasley" , "Albus Dumbledore"];


function make_great(magicianArray:string[]){
for(let i=0; magicianArray.length; i++){
magician[i] = 'The Great ' + magicianArray[i]
}
}

function show_magician(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}


make_great(magician);
show_magician(magician);