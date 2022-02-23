/*This is a string compression problem. Essentially, what the function is suppose 
to do is take an input of a string, such as "a3b2c3c9b2" and return a compressed 
version of the string adding the digits correlated to the letter prior to the digits.
 If we take our previous example, "a3b2c3c9b2", our output is suppose to look like 
 "a3b4c12" as "b2" + "b2" = "b4 and "c3" + "c9" = "c12." The function is also 
 suppose to sort the output, so if we are given "d3a3b3a1d2," it should output 
 "a4b3d5." */


 function stringComp(str){

    let arr = [str.charAt(0)];
    let numTemp = ""
    
      for(let i = 1; i < str.length;i++){
    
        let temp = str.charAt(i);
        
        if(temp.length === 1 && temp.match(/[a-z]/i)){
          arr.push(numTemp);
          arr.push(str.charAt(i));
          numTemp = "";
        }else{
          numTemp += str.charAt(i);
        }  
      }
    
      arr.push(numTemp);
    
      let resArr = [];
    
      for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        if(temp.length === 1 && temp.match(/[a-z]/i) && !resArr.includes(temp)){
          resArr.push(temp);
        }
      }
    
      resArr.sort();
    
      let resArr2 = []
    
      for(let i = 0; i < resArr.length; i++){
        resArr2.push(resArr[i]);
        resArr2.push(0);
      }
    
      for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        if(!temp.match(/[a-z]/i)){
          let index = resArr2.indexOf(arr[i-1]) + 1;
          resArr2[index] += parseInt(arr[i]);
        }
      }
    
    
      let result = "";
    
      for(let i = 0; i < resArr2.length;i++){
        result += resArr2[i].toString();
      }
    
      console.log(result);
      return result;
      
    }

stringComp("a2a3b3c3")
stringComp("a12z54d12a3b2c3c9c1b11a7d12"); 