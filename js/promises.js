function promiseBody(resolve){
    setTimeout(resolve,1000);
}

function medicine1Get(){
    var answer = new Promise(promiseBody);
    return answer;
}

function printThing(){
    console.log("Hi there");
}

var medicine = medicine1Get();
medicine.then(printThing)
console.log(medicine);