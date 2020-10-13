// Given two strings A and B of lowercase letters, return true if you 
// can swap two letters in A so the result is equal to B, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed) such 
// that i != j and swapping the characters at A[i] and A[j]. For example, swapping 
// ndices 0 and 2 in "abcd" results in "cbad".

 

// Example 1:
// Input: A = "ab", B = "ba"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", 
// which is equal to B.

// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
// Example 4:

// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true

function buddyString(A,B){

    
    let storedArray = []

    if(A.length === B.length){
    for(let i = 0; i < A.length - 1; i++){
            let j = i + 1
            let newerA = A.split("")
           
            let b = newerA[i]
            newerA[i] = newerA[j]
            newerA[j] = b
            storedArray.push(newerA.join(''))

        }
        console.log(storedArray.includes(B))
    }else{
        console.log(false)
    }
    
}



buddyString("aaaaaaabc", "aaaaaaacb")
buddyString("ab", "ab")
buddyString("ab", "ba")
buddyString("", "a")