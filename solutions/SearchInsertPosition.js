/*Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the index 
where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4 */ 

var searchInsert = function(nums, target) {
    
    let determine = false;
    let result;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            determine = true;
            result = i;
        }
    }
    
    
    if(determine){
        console.log(result);
        //return result
    }else{
        nums.push(target)
        nums.sort(function(a, b) {
          return a - b
        })
        console.log(nums.indexOf(target))
        //return nums.indexOf(target);
    }
};

searchInsert([1,3,5,6], 2)
searchInsert([3,5,7,9,10], 8)

