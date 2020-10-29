// Given a non-empty string s and a dictionary wordDict containing a list of
// non-empty words, determine if s can be segmented into a space-separated sequence
// of one or more dictionary words.
// Note:
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

const wordBreak = (s, wordDict) => {
    if(!wordDict) return false;
      
  //Create a DP table of len(s) elements, and set true when if mark index i when s(i) is a word that can be formed from wordDict
    let dp = new Array(s.length + 1);
    dp[0] = true; //word of length 0 is always true;
    let matches=[];
    for(let i = 1; i <= s.length; i++) {
      //i denotes that word length.
      for(let j = 0; j<i; j++) {
            if(dp[i]) break; //will not need to set dp[i] if it's already true
        if(dp[j] && wordDict.indexOf(s.substring(i,j)) >= 0) {
  //dp[j] = previous substring, s.substring(i,j) = remaining substring
          dp[i] = true;
          break;
        }
      }
    }
    return Boolean(dp[s.length]);
  };

console.log(wordBreak("leetcode",["leet", "code"]))
console.log(wordBreak("catsandog",["cats", "dog", "sand", "and", "cat"]))