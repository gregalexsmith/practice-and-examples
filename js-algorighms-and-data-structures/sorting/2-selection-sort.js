/**
Selection Sort
Similar to bubble sort 
but instead of first placing large values into sorted position 
it places small values into sorted position

Process
- store the first element as the smallest value you've seen so far
- compare theis item to the next ietm in the array until you find a smaller number
- if a samller number is found, designate that smaller number to be the new minimum
  and continue until the end of the array
- if the minimum is not the value (index) you initially began with, swap the two values
- repeat this with the next element until the array is sorted

Time Complexity: 0(n^2)
 - since we are comparing each element to every other element (big picture)
 - Not great
- Can be good for situations where we're concerened about swapping items too often
*/



const { swap } = require('./utils')

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        var lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log("comparing: ", i, j);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            console.log("swapping", i, lowest);
            swap(arr, i, lowest);
        }
    }
    return arr;
} 

console.log(selectionSort([0, 2, 37, 45, 28, 8, 2]))

/**
Selection Sort
[ 0, 2, 37, 45, 28, 8, 2 ]  // nothing (0 is lowest)
[ 0, 2, 37, 45, 28, 8, 2 ]  // nothing (2 is lowest)
[ 0, 2, 2, 45, 28, 8, 37 ]  // swaps 2 and 37
[ 0, 2, 2, 8, 28, 45, 37 ]  // swaps 8 and 45
[ 0, 2, 2, 8, 28, 45, 37 ]  // nothing (28 is lowest)
[ 0, 2, 2, 8, 28, 37, 45 ]  // swaps 37 and 45
*/