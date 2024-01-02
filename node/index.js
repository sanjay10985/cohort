const express = require("express");

const app = express();
const port = 3000;

function calculateSum(n){
    var sum  = 0;
    for(var i = 0;i<n;i++){
        sum+=i;
    }
    return sum;
}

function handleFirstRequest(req,res){
    var counter = req.query.counter;
    var answer =calculateSum(counter);
    console.log(counter);
    var result = "The sum is " + answer;

    res.send(result);
}

function createUser(req,res){
    res.send("Hello world")
}

app.get('/handlesum',handleFirstRequest);
app.post('/handlesum2',createUser);

app.listen(port,()=>{
    console.log('Example app listening on port ' + port);
})


