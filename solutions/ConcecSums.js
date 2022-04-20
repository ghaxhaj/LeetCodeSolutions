/*For A given Number N, find the amount of consecutive natrual numbers that sum up to N 

Ex: N = 10 -> Result: 1
    Explanation:
        1 + 2 + 3 + 4 = 10 

Ex: N = 99 -> Result : 5
    Explanation: 
    4 + 5 + 6 + 7 + 8 + 8 + 10 + 11 + 12 + 13 + 14 = 99
    7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 = 99
    14 + 15 + 15 + 17 + 18 + 19 = 99
    32 + 33 + 34 = 99
    49 + 50 = 90
*/



function consecNum(N){

    let counter = 0; 
  
    for(let i = 1; i < N; i++){
      
      let temp = i;
  
      for(let j = i + 1; j < N; j++){
        temp += j;
        
        if(temp == N){
          counter++;
        }
  
        if(temp > N){
          break;
        }
      }
    }
  
  
    return counter;
  
  }
  
  console.log(consecNum(10)) // 1
  console.log(consecNum(99)) // 5
  console.log(consecNum(100)) // 2