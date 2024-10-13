/* ARRAY ROTATION : Implement a function to rotate an 
array to the right by a specified number of positions. */
var arr = [1,2,3,4,5,6,7];
var k = 8;
console.log(rotate(arr, k));

function rotate(arr,k){
    k = k % arr.length;
    reverse(arr,0,k-1)
    reverse(arr,k,arr.length-1)
    reverse(arr,0, arr.length -1)
    console.log(arr);
}

function reverse(arr,s ,e){
    while(s <= e){
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
}