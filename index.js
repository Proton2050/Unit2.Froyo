// prompt user for list of froyo flavors seperated by commas
// insert vanilla,vanilla,vanilla,strawberry,coffee,coffee for user input
// let flavors = prompt("What flavors of frozen yogurt would you like?", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
const flavors = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";
// display in console the quantity of each flavor listed
// split flavors by commas into an flavors array
let falvorArray = flavors.split(',');
console.log(falvorArray);
// create an object to store the flavors and quantity of each
const froyoFlavors = {};
for (const flavor of falvorArray) {
    froyoFlavors[flavor] ? froyoFlavors[flavor]++ : froyoFlavors[flavor] = 1;
};
console.log(froyoFlavors);