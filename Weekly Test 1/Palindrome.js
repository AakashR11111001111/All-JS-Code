/* STRING PALINDROME: Create a function to check if 
a given string is a palindrome (reads the same forwards 
and backwards) while ignoring non-alphanumeric characters.*/

var str1 = "RaceCar"
var str = str1.toLowerCase();
var strArr = str.split('');

console.log(isPalindrome(strArr));


function isPalindrome(){
    let s = 0, e = strArr.length - 1;
    while(s <= e){
        let mid = s+(e-s) / 2;
        if(strArr[s] != strArr[e]){
            return false;
        }
        s++;
        e--;
    }
    return true;
}
