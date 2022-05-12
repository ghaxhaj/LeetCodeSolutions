// Given an array of numbers, arrange them in a way that yields the largest value. For example, if the given numbers are {54, 546, 548, 60}, the arrangement 6054854654 gives the largest value. And if the given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, then the arrangement 998764543431 gives the largest value.



function findLargestNum(arr){
  
    let convertedArr = arr.map(e => e.toString())
  
    for(let i = 0; i < convertedArr.length; i++){
      for(let j = i + 1; j < convertedArr.length; j++){
      if(convertedArr[i].length == convertedArr[j].length){
        let var1 = parseInt(convertedArr[i])
        let var2 = parseInt(convertedArr[j])
        if(var1 < var2){
          let temp = convertedArr[i]
          convertedArr[i] = convertedArr[j]
          convertedArr[j] = temp;
        }
      }else{
        let var1 = parseInt(convertedArr[i] + convertedArr[j])
        let var2 = parseInt(convertedArr[j] + convertedArr[i])
  
        if(var2 > var1){
          let temp = convertedArr[i]
          convertedArr[i] = convertedArr[j]
          convertedArr[j] = temp;
        }
      }
    }
    }
  
  
    
    return convertedArr.join().replace(/,/g,"")
    
    
  }
  
  console.log(findLargestNum([54, 546, 548, 60])) //6054854654
  
  console.log(findLargestNum([1, 34, 3, 98, 9, 76, 45, 4])) //998764543431