const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.get('/handlesum',handleFirstRequest);

function calculateSum(n){
    var sum  = 0;
    for(var i = 0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

function handleFirstRequest(req,res){
    var counter = req.query.counter;
    var answer =calculateSum(counter);
    var result = {
        sum: answer
    };
    res.send(result);
}

app.listen(port,()=>{
    console.log('Example app listening on port ' + port);
})


