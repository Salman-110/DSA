//Q3. FInd the even numbers from 1-20

function filterEvenNum(numbers) {
    let evenNumbers = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i])
        }
    } return evenNumbers
}

let finalArray = filterEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

console.log(finalArray)

//************************************************************** */

let result2 = array1.filter(ele=>ele%2===0)      // filtering even elements