/**
Merge Sort
- combination of splitting, sorting and merging
- takes advantage of the fact that arrays of 0 or 1 element are already sorted
1. Split a large array in to small arrays of 0 or 1 elements
2. merge these small arrays into bigger sorted arrays and continue up until the original size

Time Complexity: O(n logn)
- usually the same regardless of size or edge case, unlike bubble sort
- O(log n) decompositions (splitting the array in half until size 0 or 1)
- O(n) comparisons per decomposition
Space Complexity: O(n)
*/

/**
 * Merge function 
 * Takes 2 sorted arrays and returns a merged, sorted array
 */
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

console.log("merge function example:");
console.log(merge([1, 10, 50], [2, 14, 99, 100]))

/**
 * Merge Sort
 * - break the array into halves until you have arrays that are empty or have one element
 * - Merge those with other sorted arrays until you are back at the full length of the array
 * - return the merged and sorted array!
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

console.log("merge sort:");
console.log(mergeSort([5, 2, 10, 45, 3]))
/**
mergeSort [ 5, 2, 10, 45, 3 ]       // start
mergeSort [ 5, 2 ]                  // left side: arr.length > 1, split again
mergeSort [ 5 ]
mergeSort [ 2 ]
merge [ 5 ] [ 2 ]                   // arr.length == 1, merge the two arrays and return
mergeSort [ 10, 45, 3 ]             // now the right side, split
mergeSort [ 10 ]
mergeSort [ 45, 3 ]                 // split
mergeSort [ 45 ]
mergeSort [ 3 ]
merge [ 45 ] [ 3 ]                  // merge the 2 arrays
merge [ 10 ] [ 3, 45 ]              // merge again
merge [ 2, 5 ] [ 3, 10, 45 ]        // merging left and right
[ 2, 3, 5, 10, 45 ]                 // done!
*/