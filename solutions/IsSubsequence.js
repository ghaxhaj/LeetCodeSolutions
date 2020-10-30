// Given a string s and a string t, check if s is subsequence of t.
// A subsequence of a string is a new string which is formed from the 
// original string by deleting some (can be none) of the characters without 
// disturbing the relative positions of the remaining characters. (ie, "ace" 
// is a subsequence of "abcde" while "aec" is not).
// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, 
// and you want to check one by one to see if T has its subsequence. 
// In this scenario, how would you change your code?

function isSubsequence(s,t){
    let results = []

    for(let i = -1; i < s.length; i++ ){
        results[i] = []
    for(let j = -1; j < t.length; j++){
        if(i === -1 || j === -1){
            results[i][j] = 0
        } else if (s[i] === t[j]){
            results[i][j] = results[i-1][j-1] + 1
        } else {
            results[i][j] = Math.max(results[i-1][j], results[i][j-1])
        }
    }
    }
    return results
}

console.log(isSubsequence("abc","ahbgdc"))
console.log(isSubsequence("axc","ahbgdc"))