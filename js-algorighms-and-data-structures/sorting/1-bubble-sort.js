/**
Bubble Sort

Proccess
- Start looping i from the end of the array to the beginning
- Start an inner loop with j from the beginning until i - 1
- if arr[j] > arr[j+1] swap
- return sorted array

Time Complexity: worst case O(n^2)
- if the data is sorted, then it's a bit better
*/

// without optimization
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37, 45, 28, 8, 2]))

/**
Bubble Sort
the largest values get 'bubbled' up to the top with each pass
[ 37, 45, 28, 8, 2 ]    start
[ 37, 28, 8, 2, 45 ]    45 to the top,
[ 28, 8, 2, 37, 45 ]    37 up
[ 8, 2, 28, 37, 45 ]    28
[ 2, 8, 28, 37, 45 ]    8
*/


// Optimization
// if we make a pass though the array without swaping
// array is already sorted, return
function bubbleSort2(arr) {
    var hasSwap;
    for (var i = arr.length; i > 0; i--) {
        hasSwap = false;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                hasSwap = true
            }
        }
        if (!hasSwap) break;
    }
    return arr;
}