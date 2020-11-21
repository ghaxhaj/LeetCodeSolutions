
// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]

function plusOne(d){
    let num = parseInt(d.join('')) + 1
    let newD = []
    
    for(let i = 0; i < num.toString().length; i++){
    newD.push(num.toString()[i])
    }
    return console.log(newD)
    
}

plusOne([9,2,3])
plusOne([4,3,2,1])
plusOne([0])
plusOne([1,2,3,4,5,6,7])