// Given a string, find the first non-repeating character in it and 
// return its index. If it doesn't exist, return -1.
// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

function firstUniqChar(s){
    for(let i = 0; i < s.length; i++){
        console.log(s[i])
    }
}

firstUniqChar("leetcode")
firstUniqChar("loveleetcode")