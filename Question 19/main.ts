// Exercise 19 
//Print a message indicating the number of people you are inviting for dinner
let guest_list: string[] = ['Mazher', 'Ibrahim', 'Ather', 'Ashraf'];


let not_present: string = 'Ibrahim';
let new_guest: string = 'Kamran Khan Tessori';
guest_list[0] = new_guest;


guest_list.unshift('Zia Khan');
guest_list.splice(2 , 0 , 'Muhhamad Bilal');
guest_list.push('Hamzah');

while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
}           

guest_list.splice(0,2)
console.log(guest_list);



console.log(`Total number of guests are: ${guest_list.length}`);

// Finally guest list finished!:)