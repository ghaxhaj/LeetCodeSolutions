/*
Link to Problem: https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true
*/

function encryption(s) {
    // Write your code here
    
  let strArr = s.split('')
  let row = Math.floor(Math.sqrt(s.length))
  let column = Math.ceil(Math.sqrt(s.length))
  let arr = [];
  let currInd = 0;


  if(row * column < s.length){
    row++;
  } //Checks the contraint
  
for(let j = 0; j < row; j++){
  arr.push("");
  for(let i = 0; i < column; i++){
    if(currInd < strArr.length){
    arr[j] += s[currInd];
    currInd++;
    }
  }} 
  
  /*
  first iteration preps an empty string element for population.
  second iteration checks to see if the character exists, if it does will append
  to the element and increase the current index by 1 to go to the next character
  */

  let res = "";
  currInd = 0;
  //reusing the same counter for storage efficiency

  for(let j = 0; j < column; j++){
  for(let i = 0; i < arr.length; i++){
    if(arr[i][currInd] != null){
    res += arr[i][currInd];
  }}
  currInd++;
  res += " ";
  }
  
  /*
  first iteration preps the second one to run as many times as there is columns,
  then once the characters are finished adding to the string, it increases the 
  current index by 1 so the second iteration knows to grab the next character of each
  string. It also is responsible to adding a space in the right place. Second iteration
  checks to see if the character exists, if it does, it adds it to the string
  */

  res = res.substring(0,res.length - 1);
  //The previous loop adds an extra white space to the end of the string. This is to remove that
  
  return res;

}

// encryption("haveaniceday");
// encryption("feedthedog");
// encryption("chillout")