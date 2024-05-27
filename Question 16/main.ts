// Exercise 16
// (More guests)

let guest_list: string[] = ['Mazher', 'Ibrahim', 'Ather', 'Ashraf'];

let not_present: string = 'Ibrahim';
let new_guest: string = 'Kamran Khan Tessori';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++)
{
    console.log('Respected Sir/ '  + guest_list[i] + ', \n\n We are inviting you for a dinner tomorrow at my house.\n\nThank you!\n');
}
console.log('Mr Ibrahim will not coming tomorrow for dinner!');

console.log("Good news! We found a big table so we are inviting three more people.:)");

guest_list.unshift('Sir Zia Khan');
guest_list.splice(2 , 0 , 'Sir Muhammad Bilal');
guest_list.push('Sir Hamzah');

for(let i=0; i<guest_list.length; i++)
{
    console.log('Respected Sir/ '  + guest_list[i] + ', \n\nIt is our pleasure to invite you in a party. \n\nThank you! Hope you will join us.\n\n');
}
