// Run length encoding question. ex. there is a string Aaabccdaab print output as a3b1c2d1a2b1.


function runLengthEncoding(s){

    let res = s[0].toLowerCase();
    let count = 1;
    
    for(let i = 1; i < s.length; i++){
      if(s[i].toLowerCase() == s[i - 1].toLowerCase()){
        count++;
      }else{
        res += count.toString();
        res += s[i].toLowerCase();
        count = 1;
      }
    }
  
    console.log(res)
    return res;
    
  }
  
  runLengthEncoding("Aaabccdaab") //a3b1c2d1a2b1