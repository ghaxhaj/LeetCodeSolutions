/*
Array special Product 

Implement a function which given an array of integers returns a new array for which every index carries the value of the product of the remaining elements.

Ex:

[1,3,2,4,5] -> [120, 40, 60, 30, 24]

[4,10,3] -> [30,12,40]
*/


function findSpecialProduct(arr){
  
    let returnArr = [];
  
    for(let i = 0; i < arr.length; i++){
      
      let temp = 1;
      
      for(let j = 0; j < arr.length; j++){
        if(j != i){
          temp *= arr[j];
        }
      }
      returnArr.push(temp);
    }
  
    return returnArr;
    
  }
  
  console.log(findSpecialProduct([1,3,2,4,5]))
  console.log(findSpecialProduct([4, 10, 3]))