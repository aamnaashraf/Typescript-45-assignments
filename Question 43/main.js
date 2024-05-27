// Exercise 43 ( Unchanged magicians)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function copy_array(Arr) {
    return __spreadArray([], Arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianarray = copy_array(magician);
make_great(copyMagicianarray);
console.log("This is my original array:");
show_magician(magician);
console.log("This is my modified copy of the array:");
show_magician(copyMagicianarray);
