// Exercise 15
// (Changing guest list)
let guest_list = ['Mazher', 'Ibrahim', 'Ather', 'Ashraf'];


let not_present = 'Ibrahim';

let new_guest = 'Kamran Khan Tessori';

guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir ' + guest_list[i] + ', \n\n We are inviting you for a dinner tomorrow at my house.\n\nThank you!\n\n');
}
console.log('Mr Ibrahim will not coming tomorrow for dinner!');
