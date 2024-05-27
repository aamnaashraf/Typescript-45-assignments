// Exercise 17
// (Shrinking guest list)


let guest_list: string[] = ['Mazher', 'Ibrahim', 'Ather', 'Ashraf'];

let not_present: string = 'Ibrahim';
let new_guest: string = 'Kamran Khan Tessori';
guest_list[0] = new_guest;

console.log('Mr Ibrahim will not coming tomorrow for dinner!');

console.log("Good news! We found a big table so we are inviting three more people.:)");

guest_list.unshift('Zia Khan');
guest_list.splice(2 , 0 , 'Muhammad Bilal');
guest_list.push('Hamzah');

for(let i=0; i<guest_list.length; i++)
{
    console.log('Respected Sir '  + guest_list[i] + ', \n\nIt is our pleasure to invite you in a party. \n\nThank you! Hope you will join us.\n\n');
}


console.log('\n\nSorry! we could not arrange big table,only two people will be invited:(\n\n');

while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
console.log(`Sorry Sir/Madam , ${remove_guest} you are not invited for dinner because we couldn't arrange a big table:(\n\n`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] +', \n\nYou are still invited on tomorrow dinner!\n\n Thank you!\n\n');
}
guest_list.splice(0 , 2);
console.log(guest_list);

