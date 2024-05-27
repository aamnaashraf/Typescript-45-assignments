// Exercise 44 (Sandwiches)
function make_sandwich(Item) {
    console.log("\nMake your sandwich with these items:");
    Item.forEach(function (element) {
        console.log(element);
    });
    console.log("Enjoy your sandwich!");
}
make_sandwich(["Toasted Bread", "Mayonnaise", "Chicken Breast"]);
make_sandwich(["Bread", "Tomatoes", "Bacon", "Chicken"]);
make_sandwich(["Lettuce", "Cheese", "meat", "Chilli Peppers"]);
