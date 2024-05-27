// Exercise 16
// (More guests)
var guest_list = ['Mazher', 'Ibrahim', 'Ather', 'Ashraf'];
var not_present = 'Ibrahim';
var new_guest = 'Kamran Khan Tessori';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/ ' + guest_list[i] + ', \n\n We are inviting you for a dinner tomorrow at my house.\n\nThank you!\n');
}
console.log('Mr Ibrahim will not coming tomorrow for dinner!');
console.log("Good news! We found a big table so we are inviting three more people.:)");
guest_list.unshift('Sir Zia Khan');
guest_list.splice(2, 0, 'Sir Muhammad Bilal');
guest_list.push('Sir Hamzah');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/ ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in a party. \n\nThank you! Hope you will join us.\n\n');
}
