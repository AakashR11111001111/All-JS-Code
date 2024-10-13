/* STRING COMPRESSION : Write a function to perform basic string compression 
using the counts of repeated characters. For example, "aabcccccaaa" would become "a2b1c5a3." */

var str = "aabcccccaaa"
console.log(compressString(str));
function compressString(s) {
    let compressed = "";
    let count = 1;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            count++;
        } else {
            compressed += s[i] + count;
            count = 1;
        }
    }
    
    return compressed.length < s.length ? compressed : s;
}
