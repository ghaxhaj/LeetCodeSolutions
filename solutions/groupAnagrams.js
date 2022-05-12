/*Group Anagrams- You have given a list of words. Write a program to returns a list of sets of anagrams.

Input: ['cat', 'dog', 'god']
Output: [{'cat'}, {'dog', 'god'}]

Input= ['cat', 'dog', 'cat', 'god']
Output= [{'cat'}, {'dog', 'god'}]

*/



function groupAnagrams(arr){

    let returnArr = [];
    
    for(let i = 0; i < arr.length; i++){
  
      let temp = [];
      temp.push(arr[i])
      
      for(let j = i + 1; j < arr.length;j++){
        
        if(arr[i].toLowerCase() == arr[j].toLowerCase()){
          arr.splice(j,1)
        }
  
        let comparator = 
        arr[j].split('').reverse().join().replace(/,/g,'')
        
        if(comparator.toLowerCase() == arr[i].toLowerCase()){
          temp.push(arr[j])
          arr.splice(j,1)
        }
      }
      
         returnArr.push(temp)
      
    }
  
    
    return returnArr;
    
  }
  
  console.log(groupAnagrams(['cat', 'tac','dog', 'god']))
  console.log(groupAnagrams(['cat', 'dog', 'cat', 'god']))