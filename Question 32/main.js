// Exercise 32 (Checking usernames)
var current_users = ["Hamza", "Daniyal", "Mazher", "Bilal", "Ameen Alam"];
var new_users = ["Daniyal", "Ibrahim", "Bilal", "Sohail", "Ashraf"];
new_users.forEach(function (newUsername) {
    var lowercase = newUsername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowercase)) {
        console.log("The username ".concat(newUsername, " is not available. Please write a different user name!"));
    }
    else {
        console.log("The user name ".concat(newUsername, " is available!"));
    }
});
