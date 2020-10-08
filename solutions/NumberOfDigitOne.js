// Given an integer n, count the total number of digit 1 appearing in 
// all non-negative integers less than or equal to n.

// Example:

// Input: 13
// Output: 6 
// Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

function numberOfOnes(n){
    let counter = 0

    for(i = 0; i <= n; i++){
        if(i.toString().includes("1")){
            counter++
        }
    }
    return counter
}

console.log(numberOfOnes(13))
// console.log(numberOfOnes(11))

