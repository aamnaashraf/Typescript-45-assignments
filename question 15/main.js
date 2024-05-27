// Exercise 15
// (Changing guest list)
var guest_list = ['Mazher', 'Ibrahim', 'Ather', 'Ashraf'];
var not_present = 'Ibrahim';
var new_guest = 'Kamran Khan Tessori';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' + guest_list[i] + ', \n\n We are inviting you for a dinner tomorrow at my house.\n\nThank you!\n\n');
}
console.log('Mr Ibrahim will not coming tomorrow for dinner!');
