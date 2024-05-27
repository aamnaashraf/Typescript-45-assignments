// Exercise 31 ( no users)

let userNames: string[] = ["Mazher" , "ibrahim" , "Ali" , "Zeeshan"];

if(userNames.length === 0){
    console.log("We need to find some users!");
} 
else{
    userNames = [];
    console.log("All user names have been removed!" +  userNames.length);
}