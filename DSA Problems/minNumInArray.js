// // Q1. Write a function to find min No. from an Array.

function minNum(array) {
    let currentMin = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < currentMin) {
            currentMin = array[i]
        }
    } return currentMin
}
let result = minNum([8, 5, 7, 2, 3, 9, 4])
console.log(result)