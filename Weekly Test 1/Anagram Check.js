/* ANAGRAM CHECK: Implement an algorithm to check 
if two strings are anagrams of each other 
(contain the same characters with the same frequency) */
let str1 = "rat"
let str2 = "car"
console.log(isAnagram(str1,str2));

function isAnagram(str1, str2){
    if(str1.length != str2.length) return false;
    let freq1 = getfreq(str1);
    let freq2 = getfreq(str2);
    for(i in str1){
        if(freq1[i] != freq2[i]) return false;
    }
    return true;
}
function getfreq(str){
    let arr = [];
    arr.length = 26;
    arr.fill(0);
    for(i in str){
        arr[str.charCodeAt(i) - 97]++;
    }
    return arr;
}

