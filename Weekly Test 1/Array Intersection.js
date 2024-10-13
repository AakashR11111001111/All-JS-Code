/* Array Intersection: Given two arrays, write a 
function to find their intersection (common elements). */
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];

var resArr = intersect(arr1,arr2);
console.log(resArr);

function intersect(arr1,arr2){
    let resArr = [];
    for(i in arr1){
        for(j in arr2){
            if(arr1[i]==arr2[j]){
                resArr.push(arr1[i]);
            }
        }
    }
    return resArr;
}