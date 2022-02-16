/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself. 

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

var addTwoNumbers = function(l1, l2) {
    
    let num1 = "";
    let num2 = "";
    
    for(let i = l1.length - 1; i >= 0; i--){
        num1 = num1 + l1[i].toString();
    }
        
    for(let j = l2.length - 1; j >= 0; j--){
        num2 = num2 + l2[j].toString();
    }

   num1 = parseInt(num1);
   num2 = parseInt(num2);

  let result = (num1 + num2).toString().split('').reverse();
  for(let k = 0; k < result.length; k++){
        result[k] = parseInt(result[k]);
    }
  console.log(result)

};

addTwoNumbers([2,4,3]
,[5,6,4])

let l1 = [9,9,9,9,9,9,9]
let l2 = [9,9,9,9]

addTwoNumbers(l1,l2);

addTwoNumbers([0],[0]);