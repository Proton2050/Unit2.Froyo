// prompt user for list of froyo flavors seperated by commas
// insert vanilla,vanilla,vanilla,strawberry,coffee,coffee for user input
let flavors = prompt("What flavors of frozen yogurt would you like?", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
// display in console the quantity of each flavor listed
// split flavors by commas into an flavors array
let falvorArray = flavors.split(',');
// create an object to store the flavors and quantity of each
const froyoOrder = {};
for (const flavor of falvorArray) {
    froyoOrder[flavor] ? froyoOrder[flavor]++ : froyoOrder[flavor] = 1;
};
// Iterate through each key in flavor object and log to the console the flavors and quantities
console.log(`Alright! we've got: `)
for (const flavor in froyoOrder) {
    console.log(`${froyoOrder[flavor]} ${flavor} froyo!`)
};
console.log(`Enjoy!😄`)