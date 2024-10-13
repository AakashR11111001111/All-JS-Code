/* Array Sum: Write an algorithm to find the pair of elements in an array that adds up to a specific target sum. */

var arr = [10, 20, 30, 50, 70, 80, 60, 100];
var k = 100;
var resArr = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == k) {
            resArr.push([arr[i], arr[j]]);
        }
    }
}
console.log(resArr);
