const fs = require('fs');

var sum = function(n){
   let sum = 0;
   for(let i = 0;i<=n;i++){
      sum+=i;
   }
   console.log(sum);
}  

function fileIsRead(err,fileContent){
   sum(fileContent);
}

fs.readFile('example.txt','utf8',fileIsRead);

sum(102);
sum(103);
    

