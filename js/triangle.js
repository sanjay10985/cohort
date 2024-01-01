var n = 5;

for(var i = 1;i<=n;i++){
    let patterns = '  ';
    for(var j = n-i;j>0;j--){
        patterns += '  ';
    }
    for(var j = 0;j<(2*i)-1;j++){
        patterns += ' *';
    }
    console.log(patterns);
}

