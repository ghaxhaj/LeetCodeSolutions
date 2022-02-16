// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-2147483647]
// Output: -2147483647

function maxSubArray(nums) {
    let maxSoFar = 0
    let maxEndingHere = 0

    if(nums.length = 1){
        return nums[0]
    }
    
    for(let i = 0; i < nums.length; i++){
        maxEndingHere = maxEndingHere + nums[i]
        if(maxSoFar < maxEndingHere){
            maxSoFar = maxEndingHere
        }if(maxEndingHere < 0){
            maxEndingHere = 0
        }
    }
    return maxSoFar
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2,-1]))
//console.log(typeof 22)