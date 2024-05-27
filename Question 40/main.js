"use strict";
// Exercise 40 (Albums)
function make_album(Artist, Title, Tracks) {
    const album = {
        Artist: Artist,
        Title: Title,
    };
    if (Tracks !== undefined) {
        album.Tracks = Tracks;
    }
    return album;
}
const Album1 = make_album("Ali Zafar", "Jhoom");
console.log(Album1);
const Album2 = make_album("Atif Aslam", "Jal Pari");
console.log(Album2);
const Album3 = make_album("Ayaz", "Mausam e Dil", 24);
console.log(Album3);
