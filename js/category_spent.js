function solve(spent){
    var categories = {};
for(let i = 0;i<spent.length;i++){
    const category = spent[i].category;
    if(categories[category]){
        categories[category] += spent[i].price;
    }
    else{
        categories[category] = spent[i].price;
    }
}
console.log(categories);

var keys = Object.keys(categories);
let answer = [];
for(var i = 0;i<keys.length;i++){
    var category = keys[i];
    var obj = {
        category: category,
        amountSpend: categories[category]
    }
    answer.push(obj);
}
console.log(answer);

}

var spent = [
    {
        name : "dettol soap",
        category: "Health",
        price: 40
    },
    {
        name : "dettol HandWash",
        category: "Health",
        price: 60
    },
    {
        name : "dettol soap",
        category: "Health",
        price: 40
    },
    {
        name : "dettol HandWash",
        category: "Health",
        price: 60
    },
    {
        name : "coconut oil",
        category: "hair care",
        price: 80
    },
]
solve(spent);

