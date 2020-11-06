// Given an integer, write a function to determine if it is a power of three.

function powerOfThree(num){
    let array = []
    for(i = 1; i < num; i ++){
        let int = Math.pow(3,i)
        array.push(int)
    }
if(array.includes(num)){
    console.log(true)
}else{
    console.log(false)
}
}

powerOfThree(27)
powerOfThree(9)
powerOfThree(26)