function isAnagram(str1,str2){
    if(str1.split('').sort().join('') === str2.split('').sort().join('')){
        return true;
    }
    
        return false;
    
}

var ans = isAnagram("rasp", "pasr");
console.log(ans);