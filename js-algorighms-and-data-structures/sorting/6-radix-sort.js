/**
Radix Sort
- unlike the previous sorting algorithms, radix sort is non-comparative
- sorts data with integer keys
- groups the keys by individual digits that share the same position and value

Time Complexity: O(nk)
 - vary large numbers will impact the time 
*/


/**
 * getDigit
 * - helper function to get a digit from a number
 */
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

console.log('Get Digit', getDigit(7452, 3));

/**
 * digitCount
 * - figure out how many digits in a number
 */
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log('Digit Count', digitCount(7452));

/**
 * getMaxDigits
 * - given an array, returns highest digit count
 */
function getMaxDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, digitCount(nums[i]));
    }
    return max;
}
console.log('Most Digits', getMaxDigits([3, 223423, 234, 23]));


/**
 * Radix Sort
 * - accepts a list of numbers
 * - figure out how many digits the largest number has
 * - loop from k=0 up to largest number of digits
 *   - create a bucket for each digit (0 to 9)
 *   - place each num in corresponding bucket based on it's kth digit
 * - Replace existing array with values in our buckets starting with 0 up to 9
 * - return list
 */
function radixSort(nums) {
    let maxDigits = getMaxDigits(nums)
    for (let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log("digitbuckets", JSON.stringify(digitBuckets));
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
    return nums
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))