// Given a string, find the longest uniform sub-string in it. Return the repeating character and the number of times it repeats.

// Solution
// Let us take an example string like “abcdddss“. The question is asking us to return the longest sub-string with the same characters. 
//In this case the longest uniform sub-string is “ddd". So, we need to return d as the repeating character and 3 as number of times it
//repeats.


function longestUniformSubString(s){
    let res = s[0]
    let count = 1;
    let storeArr = [];
  
    for(let i = 1; i < s.length; i++){
      if(s[i] == res){
        count++;
      }else{
        let temp = [res,count];
        storeArr.push(temp);
        res = s[i];
        count = 1;
      }
    }
  
    let result = ""
    let maxLen = 0;
  
    for(let i = 0; i < storeArr.length; i++){
      if(storeArr[i][1] > maxLen){
        maxLen = storeArr[i][1]
        result = storeArr[i][0]
      }
    }
  
    console.log("The character " + result + " occurs " + maxLen + " times");
    return result
  }
  
  longestUniformSubString("abcccccdddssss") // c