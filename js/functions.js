var sum  = function(index1,index2){
    var sum = 0;
    for(let i = index1;i<=index2;i++){
        sum += i;
    }
    return sum;
}

var ans = sum(1,100);

console.log(ans);