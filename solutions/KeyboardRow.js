// Given a List of words, return the words that can be typed using letters of
// alphabetly one row's of American keyboard like the image below.

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

function keyboardRow(arr){
    let rowOne = ["q",'w','e','r','t','y','u','i','o','p']
    let rowTwo = ['a','s','d','f','g','h','j','k','l']
    let rowThree = ['z','x','c','v','b','n','m']
    let solution = []

    for(let i = 0; i < arr.length; i++){
     let word = arr[i].split('')
        if(rowOne.includes(word)){
            solution.push(word)
        } else if (rowTwo.includes(word)){
            solution.push(word)
        } else if (rowThree.includes(word)){
            solution.push(word)
        }
     }
     return solution
    }



console.log(keyboardRow(["hello", "Alaska", "Dad", "Peace"])) 