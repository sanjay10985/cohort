function fibonacci (arr,n){
    arr[0] = 0;
    arr[1] = 1;
    for(var i = 2;i<n+1;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

var n = 5;
var arr = [];
arr = fibonacci(arr,n);

for(var i = 0;i<n+1;i++){
    console.log(arr[i]);
}