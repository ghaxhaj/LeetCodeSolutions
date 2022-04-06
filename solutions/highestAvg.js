// Given a 2-D String array of student-marks find the student with the highest average and output his average score. If the average is in decimals, floor it down to the nearest integer.

//   Input:  [["Bob","87"], ["Mike", "35"],["Bob", "52"], ["Jason","35"], ["Mike", "55"], ["Jessica", "99"]]
// Output: 99
// Explanation: Since Jessica's average is greater than Bob's, Mike's and Jason's average.

function highestAverage(arr){
    let avgArr = [{}];
  
    for(let i = 0; i < arr.length; i++){
      
      let temp = false;
      let index = -1;
      
      for(let j = 0; j < avgArr.length; j++){
        if(avgArr[j].name == arr[i][0]){
          temp = true;
          index = j
        }
      }
  
      if(temp){
        avgArr[index].grade += parseInt(arr[i][1]);
        avgArr[index].count += 1;
      }else{
  
      let obj = {
        "name": arr[i][0],
        "grade": parseInt(arr[i][1]),
        "count": 1
      }
        
        avgArr.push(obj)
      }
    }
  
    avgArr.shift()
  
    let result = 0;
  
    for(let i = 0; i < avgArr.length; i++){
      if(avgArr[i].grade / avgArr[i].count > result){
        result = avgArr[i].grade / avgArr[i].count 
      }
    }
  
    console.log(result)
    return result;
  
  }
  
  highestAverage([["Bob","87"], ["Mike", "35"],["Bob", "52"], ["Jason","35"], ["Mike", "55"], ["Jessica", "99"]]);
  
  
  