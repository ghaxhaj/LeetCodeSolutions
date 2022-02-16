// You are given a feature to display the median price of a given beverage type. Given an n
// sized unsorted array of integer prices, write a function findMedian([]) to return the
// median price. You can assume that the array will contain at least one element.

// Tests:
// findMedian([1,6,3,5,8,9,4,10,2]) => 5
// findMedian([1,6,3,5,8,9,4,10,2,7]) => 5.5

function findMedian(arr){

    let sortedArr = arr.sort(function(a,b){
        return a - b
    })

    if(sortedArr.length % 2 === 0){
        let lowerMid = ((sortedArr.length / 2) - 1)
        let upperMid = ((sortedArr.length / 2))
        let median = (sortedArr[lowerMid] + sortedArr[upperMid]) / 2

        return median

        
    } else{

        let median = sortedArr[(sortedArr.length / 2) - 0.5]
        return median
    }
}

console.log(findMedian([1,6,3,5,8,9,4,10,2]))
console.log(findMedian([1,6,3,5,8,9,4,10,2,7]))
