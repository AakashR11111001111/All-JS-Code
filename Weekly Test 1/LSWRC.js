/* LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS : 
Write an algorithm to find the length of the longest 
substring without repeating characters in a given string. */

var str = "pwwkew";
var s = new Set();
let i = 0, j = 0, max = 0;
while(i < str.length){
    while(s.has(str[i])){
        s.delete(str[j]);
        j++;
    }
    let len = i - j + 1;
    max = len > max ? len : max;
    s.add(str[i]);
    i++;
}

console.log(max);