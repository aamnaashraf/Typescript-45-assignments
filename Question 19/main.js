// Exercise 19 
var guest_list = ['Mazher', 'Ibrahim', 'Ather', 'Ashraf'];
var not_present = 'Ibrahim';
var new_guest = 'Kamran Khan Tessori';
guest_list[0] = new_guest;
guest_list.unshift('Zia Khan');
guest_list.splice(2, 0, 'Muhhamad Bilal');
guest_list.push('Hamzah');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
}
guest_list.splice(0, 2);
console.log(guest_list);
//Exercise 19 
//Print a message indicating the number of people you are inviting for dinner
console.log("Total number of guests are: ".concat(guest_list.length));
