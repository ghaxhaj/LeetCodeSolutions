//Return the square root of a number
//Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.




function msSqrt(x) {
    let answer = Math.sqrt(x)

    if(answer === 0){
        return 0
    }
    if(answer && answer % 1 === 0){
        return answer
    }if(answer && answer % 1 !== 0){
        return Math.floor(answer)
    }
    };

    console.log(msSqrt(4))
    console.log(msSqrt(8))