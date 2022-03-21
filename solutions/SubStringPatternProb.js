/*The goal of this question is to determine how many substrings with the 
length of the pattern within the user-input matched the pattern so that 
every 0 in the pattern was a vowel and every 1 in the pattern was a 
consonant. To better explain this, let us say we have the pattern 010 
and the string "amazing." The substrings within "amazing" that match the 
length of this pattern are: ["ama","maz","azi","zin","ing"]. The output
of the function with this input should be 2 because "ama" and "azi" follow
 the 010 format where the first and last letters are vowels and the middle 
 is a consonant. */

function patternSubStringFunction(pattern, userInput){
  
    let subStringArr = [];
    let result = 0;
  
    for(let i = 0; i < userInput.length - (pattern.length - 1); i++){
      let temp = userInput.substring(i,i+pattern.length);
      subStringArr.push(temp);
    }
  
    //console.log(subStringArr)
  
    for(let i = 0; i < subStringArr.length; i++){
      let temp = subStringArr[i].split('')
      let patternTemp = pattern.split('');
      let test = 0;
  
      for(let j = 0; j < temp.length; j++){
        if(parseInt(patternTemp[j]) == 0){
          if(temp[j] == 'a' || temp[j] == 'e' || temp[j] == 'i' || temp[j] == 'o' || temp[j] == 'u' || temp[j] == 'y'){
            test++;
          }
        }
        if(parseInt(patternTemp[j]) == 1){
          if(temp[j] != 'a' || temp[j] != 'e' || temp[j] != 'i' || temp[j] != 'o' || temp[j] != 'u' || temp[j] != 'y'){
            test++;
          }
        }
      }
  
      if(test == temp.length){
        result++;
      }
    }
  
    //console.log(result);
    return result;
  
    
  }
  
  patternSubStringFunction("010", "amazing"); //2
  patternSubStringFunction("0101", "amazing"); //2
  