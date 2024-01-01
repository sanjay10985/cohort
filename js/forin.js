var colors = {
    first:"blue",
    second: "red",
    third: "green"
};

for(var color in colors){
    console.log(color + " -> " +colors[color]);
}

var foodItems = ["dahipuri","sevpuri","icecream"];

for(var food in foodItems){
    console.log(food + " -> " +foodItems[food]);
}