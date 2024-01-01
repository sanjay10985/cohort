function sum(i,j){
    return i+j;
}

function doArithmatic(i,j,arithmaticFunc){
    return arithmaticFunc(i,j);
}

var answer = doArithmatic(3,4,sum);
console.log(answer);
