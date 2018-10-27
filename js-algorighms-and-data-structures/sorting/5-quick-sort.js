const { swap } = require('./utils')
/**
Quick Sort
- works around piviot points within the array
- ideally this would be the median value, but that's tricky. (for this example, choose the first)

Time Complexity: O(n logn) -> O(n^2)
 - always decomposing to single element arrays  (log n)
 - Have to make O(n) comparisons 
 - If the data is already sorted -> O(n) decompositions, O(n) comparisons 
 - Could take the middle or random element, but theres always a chance it'll pivot around the min/max which is bad
Space Complexity: O(log n)
*/


/**
 * Pivot Function
 * - arrange elements in an array on either side of a pivot
 * - Given an array, designate an element as the pivot
 * - then rearrange elements in the array so that all values less than the pivot are moved to the left
 * - and all values greater than the pivot are moved to the right
 * - should do it isn place
 * - return index of the pivot
 * 
 * Steps:
 * - accepts an array, start index and end index
 * - set pivot to the start of the array
 * - store the current pivot index in a variable 
 * - loop through the array
 *  - if the pivot > current element, increment pivot index and swap current el with el at pivot index
 * - swap the starting element (the pivot) with the pivot index
 * - return the pivot index
 */
function pivot(arr, start = 0, end = arr.length + 1) {
    console.log("pivot start", arr.slice(start, end + 1));
    
    var pivot = arr[start];
    var swapIdx = start;
    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    console.log("pivot end  ", arr.slice(start, end + 1));
    return swapIdx;
}
console.log("pivot function example:");
console.log(pivot([4, 2, 1, 5])) // should be 2


/**
 * Quick Sort
 * Steps
 * - call the pivot helper on the array to get the updated pivot index
 * - recursively call the pivot helper on the subarray to the left and right of the index
 * - base case: when we get a sub-array of less than 2 elements
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    console.log('quicksort  ', arr.slice(left, right + 1), 'of', arr);
    
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log("quick sort:");
console.log(quickSort([4, 6, 9, 1, 2, 5]))

/**
quick sort:
quicksort   [ 4, 6, 9, 1, 2, 5 ] of [ 4, 6, 9, 1, 2, 5 ]
pivot start [ 4, 6, 9, 1, 2, 5 ]                            // first pivot
pivot end   [ 2, 1, 4, 6, 9, 5 ]
quicksort   [ 2, 1 ] of [ 2, 1, 4, 6, 9, 5 ]                // quicksort left side
pivot start [ 2, 1 ]                                        // pivot the left sub array
pivot end   [ 1, 2 ]
quicksort   [ 1 ] of [ 1, 2, 4, 6, 9, 5 ]
quicksort   [] of [ 1, 2, 4, 6, 9, 5 ]
quicksort   [ 6, 9, 5 ] of [ 1, 2, 4, 6, 9, 5 ]             // now to the right of the pivot
pivot start [ 6, 9, 5 ]                                     // pivot the right sub array
pivot end   [ 5, 6, 9 ]
quicksort   [ 5 ] of [ 1, 2, 4, 5, 6, 9 ]                   // quick sort left and right sides
quicksort   [ 9 ] of [ 1, 2, 4, 5, 6, 9 ]
[ 1, 2, 4, 5, 6, 9 ]                                        // and done
*/
