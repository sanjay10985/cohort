var n = 4;

for(var i = 1;i<=n;i++){
    let pattern = ' '.repeat(n-i);
    let current = 1;
    for(var j = 1;j<=i;j++){
        pattern += current++;
    }
    let val = i-1;
    for(var j = 0;j< i-1;j++){
        pattern += val--;
    }
    console.log(pattern);
}