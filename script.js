console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = [
"Ramen",
"Sushi",
"Tacos",
"Pho",
"Fried Chicken",
"Brownies",
"Pasta"
];


// 2. Loop through the list and print: "One of my favorite foods is ______."
favoriteFoods.forEach(food => {
console.log(`One of my favorite foods is ${food}.`);
});



// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
favoriteFoods.forEach((food, index) => {
const rank = index + 1;
console.log(`My #${rank} favorite food is ${food}`);
});




// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName){
console.log(`Have you ever tried ${foodName}?`);
console.log(`I always recommend ${foodName} to friends.`);
console.log(`Trust me — ${foodName} is delicious.`);
}



// 4b. Call the function at least 3 times
printFoodRecommendation("Ramen");
printFoodRecommendation("Sushi");
printFoodRecommendation("Tacos");


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
const hasA = (name) => /a/i.test(name);
friendFavorites.forEach(food => {
if (hasA(food)) {
console.log(food);
}
});

// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = friendFavorites.filter(hasA);
console.log("foodsWithA:", foodsWithA);


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = friendFavorites.filter(name => name.length > 6);


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(name => name.length <= 6);


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log("longFoodNames:", longFoodNames);
console.log("shortFoodNames:", shortFoodNames);
if (longFoodNames.length > shortFoodNames.length) {
console.log("There are more long-named foods.");
} else if (longFoodNames.length < shortFoodNames.length) {
console.log("There are more short-named foods.");
} else {
console.log("There are the same number of long and short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longest = friendFavorites.reduce((acc, cur) => cur.length > acc.length ? cur : acc, "");
console.log(`The longest food name in the list is ${longest} with ${longest.length} characters.`);
```js