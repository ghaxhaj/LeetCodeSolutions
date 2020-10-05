function doubleUp(n){
    let array = new Array
    for(let i = 0; i < n.length; i++){
        array.push(n[i] * 2)
    }
    return array
}

console.log(doubleUp([1,2,3,4,5]))