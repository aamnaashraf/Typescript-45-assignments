// Exercise 43 ( Unchanged magicians)

let magician:string[] = ["Harry Potter" , "Hermione Granger" , "Ron Weasley" , "Albus Dumbledore"];

function copy_array(Arr:string[]){
    return [...Arr]
}


function make_great(magicianArray:string[]){
for(let i=0; magicianArray.length; i++){
magicianArray[i] = 'The Great ' + magicianArray[i]
}
}


function show_magician(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

const copyMagicianarray = copy_array(magician);

make_great(copyMagicianarray);

console.log("This is my original array:");
show_magician(magician);

console.log("This is my modified copy of the array:");
show_magician(copyMagicianarray);