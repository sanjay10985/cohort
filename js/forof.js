var scores = [60,70,80,90];

for(var score of scores){
    console.log(score);
}

for(var [index,value] of scores.entries()){
    console.log(index + " -> " + value);
}

var sentence = "Helloo";

for (var char of sentence){
    console.log(char);
}
