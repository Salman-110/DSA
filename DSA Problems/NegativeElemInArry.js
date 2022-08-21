// 4.Array is given.Find out the total number of negative elements present in array

// [2,4,5,-3,-2,7,-9,5,-4,3]

function NegativeElem(array){
    let arr =[]
    for(let i in array){
        if(array[i]<0){
            arr.push(array[i])
        }
    }
    return arr
}
console.log(NegativeElem([2,4,5,-3,-2,7,-9,5,-4,3]))

