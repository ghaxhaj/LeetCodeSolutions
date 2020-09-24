// Given a sing s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input sing is valid.

// An input sing is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Consaints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true


function isValid(s) {

    let array = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i=0; i < s.length; i++){
           if (s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
            array.push(s[i]);
        }
        else {
            let last = array.pop();

            if (s[i] !== map[last]) {return console.log(false)};
        }
    }
        if (array.length !== 0) {return console.log(false)};

    return console.log(true);
}


isValid("()")