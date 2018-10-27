/**
Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted

Process
- start by picking the second element in the array 
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it's in the incorrect order
  itterate throught the sorted portion (left side)
  and place the element in the correct place
- repeat until the array is sorted

Time Complexity: worst case O(n^2)
- if the data is sorted, then it's a bit better
- good for 'live data' if there are new numbers being introduced to be sorted
*/



function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        console.log(arr);
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
            console.log(arr, "internal");
        }
        arr[j + 1] = currentVal;
    }
    return arr;
} 

console.log(insertionSort([5, 2, 10, 45, 3]))

/**
Insertion Sort
[ 5, 2, 10, 45, 3 ]  
[ 2, 5, 10, 45, 3 ]  current val 2 < [i - 1] 5, insert 5 at [i]
                    - done inner loop, insert 2 at beginning
[ 2, 5, 10, 45, 3 ]  current val 10 > 5, write 10 to 10
[ 2, 5, 10, 45, 3 ]  current val 45 > 10,  write 45 to 45
[ 2, 3, 5, 10, 45 ]  current val 3 < [j = i - 1] 45, 
                    - insert 45 at j + 1
                        [ 2, 5, 10, 45, 45 ]
                    - current val 3 < [j = i - 2] 10,
                    - insert 10 at j + 1
                        [ 2, 5, 10, 10, 45 ]
                    - again with 5
                        [ 2, 5, 5, 10, 45 ]
                    - current val 3 > 2
                    - doen inner loop, insert currentVal at j + 1
                        [ 2, 3, 5, 10, 45 ]
*/