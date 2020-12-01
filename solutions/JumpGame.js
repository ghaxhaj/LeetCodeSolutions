// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 
// Constraints:
// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i][j] <= 10^5

function jumpGame(n){
    
    //Numbers in array indicate how many spaces to jump
    //If i reaches the last number in the array, return true 
    //if I goes not reach last number in array, goes false

   
    for(let i = 0; i < n.length; i++){
        let counter = i + n[i]
        if(n[counter] !== n[n.length - 1]){
            counter = counter + n[counter]
        }
        if(n[counter] === n[n.length - 1]){return console.log(true)}
    }
    return console.log(false)
}

jumpGame([2,3,1,1,4]) //Should return true 
jumpGame([3,2,1,0,4]) //Should return false