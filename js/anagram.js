var first = "sanjay";
var second = "yajnas";
var anagram = true;

var firstCharacters = {};

if(first.length != second.length){
    anagram = false;
}
else{

for(let i = 0;i<first.length;i++){
    let char = first[i];
    if(firstCharacters[char]){
        firstCharacters[char]++;
    }
    else{
        firstCharacters[char]= 1;
    }
}

for(let i = 0;i<second.length;i++){
    let char = second[i];
    if(firstCharacters[char] && firstCharacters[char] != 0){
        firstCharacters[char]--;
    }
    else{
        anagram =  false;
        break;
    }
}
}

console.log(anagram);