var n = 5;

for(let i = 1;i<=n;i++){
    let pattern = ' '.repeat(n-i);
    pattern += '*'.repeat((2*i)-1)
    console.log(pattern);
}

for(let i = n-1;i>0;i--){
    let pattern = ' '.repeat(n-i);
    pattern += '*'.repeat((2*i)-1);
    console.log(pattern);
}