/*Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    
    if(s == null){
        return 0;
    }//checks to see if the input is empty
    
    if(s.length < 2){
        return s.length;
    } //checks top see if the input is only 1 character
    
    let max = 1;
    let temp = s[0];
    let arr = s.split('');
    
    /*
    For any value of s with a length of 2 more more, we know that the max at a minumum will be 1.
    We start temp as the first character in s.
    We use the .split('') function to create an array of characters within s. 
    */
    

    for(let i = 1; i < arr.length; i++){

        let t = arr[i]
        let sample = temp.toString()
        temp = temp + t;
        
        /*
        For each iteration, we want to keep track of two substrings: the first being what temp use to be, and the second
        being temp with the new character added. For the example "abcabcb", the iterations will update sample and temp as follows:
        When i = 1: sample = 'a' temp = 'ab'
        When i = 2: sample is now assigned to temp, so sample = 'ab' and temp is now updated to 'abc' since it is adding the new           character
        */
        
        if(sample.includes(t)){
          sample = temp.substring(sample.indexOf(t) + 1);
          temp = sample;
            
        /*
        This condition checks to see if the sample string contains the new character. If it does, that means we have to reassign           sample to the substring of temp from the index after where the character was found in sample. To use the previous example           of "abcabcb," this condition first hits on the 3rd iteration, when sample = "abc", temp = "abca", and t = "a".
        sample.includes(a) will be true, so we set sample to the temps subtring from the index after where t was found. So in this         case, the index of t in sample is at 0, therefore the substring for temp will start from 1, making sample = "bca." We then         set temp to the new sample string because we want to check to see if there will be any longer substrings from that point           on.  
        */
            
        }else{
            
          max = Math.max(max, temp.length);
            
        /*
        Else will hit if t is not included within sample. Math.max(a,b) will choose the higher number of a or b. So Math.max(1,2)           will output 2. Here, we are checking the length of temp because temp will always be the most updated substring. Our                 previous example outputs 3 since the biggest substring within "abcabcb" are "abc", "bca", and "cab." If we take the example         "abcabcdb", when we reach the iteration where t = "d", the max at this current point is 3 since the previous substring it           was compared with was "abc." Temp will be updated to "abcd", so when it hits the else condition, max = Math(3,4) will set           max to 4;   
        */
        }
    }

    //console.log(max) 
    return max
} 

lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("pwwkew")