/*STRING REVERSAL: Write a function to reverse a given string 
in JavaScript without using built-in reverse functions. */

let userStr = "Hello World";
let res = reverse(userStr);
function reverse(str){
    let res = '';
    for(let i = str.length - 1; i >= 0 ; i--){
        res += str[i];
    }
    return res;
}
console.log(res);