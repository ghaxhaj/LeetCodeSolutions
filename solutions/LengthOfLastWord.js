// Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
// return the length of last word (last word means the last appearing word if we loop from 
// left to right) in the string. If the last word does not exist, return 0. 

function lengthOfLastWord(n){
   let word = n.split(" ").pop()
   
   if(n.split(" ").length < 2){
       console.log(0)
   }else{
   console.log(word.length)
}}

lengthOfLastWord("Hello World")
lengthOfLastWord("s s")