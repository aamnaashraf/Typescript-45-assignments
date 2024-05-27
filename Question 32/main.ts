// Exercise 32 (Checking usernames)
let current_users = [ "Hamza", "Daniyal" , "Mazher" , "Bilal" , "Ameen Alam"]
let new_users = [ "Daniyal" , "Ibrahim" , "Bilal" , "Sohail" , "Ashraf"]

new_users.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUsername} is not available. Please write a different user name!`);
    }
    else {
        console.log(`The user name ${newUsername} is available!`)
    }
});