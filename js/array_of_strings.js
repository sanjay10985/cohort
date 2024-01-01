var str= "my name is sanjay";
var start  = 0;
var end = 0;
var array = [];

for(let i = 0;i<=str.length;i++){
    if(str[i] == " " || i == str.length){
        array.push(str.slice(start,end));
        start = i+1;
        end = i;
    }
    end++;
}



// array.push(str.slice(start,str.length))

console.log(str.split(" ").sort().join(''));