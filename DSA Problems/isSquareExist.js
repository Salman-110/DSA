// //Q4. finding square of the numbers exist or not 
// // [1,2,3] -> [1,4,9]

function isSquareExist(arr, arr1) {

        for (let i = 0; i < arr.length; i++) {
            let isSquare = false;
            for (let j = 0; j < arr1.length; j++) {
                if (arr[i] * arr[i] === arr1[j]) {
                    isSquare = true
                }
                if (j === arr1.length - 1) {
                    if (!isSquare) {
                        return false
                    }
                }
            }
        } return true
    }
    let isSquareExist = isSquareExist([1, 2, 2, 3], [1, 9, 4, 4])
    console.log(isSquareNum)