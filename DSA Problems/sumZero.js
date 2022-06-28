// // FInd the pair with sum zero in an sorted array
// // [-5,-4,-3,-2,-1,0,1,2,3,4,5]

function sumZero(arr){
     
    let left = 0
    let right = arr.lenght-1

    while(left<right){
            let sum = arr[left]+ arr[right]
            
            if(sum === 0){
                return [arr[left],arr[right]]
            }
            else if(sum > 0){
                right--;
            }
            else {
            left++;
            }
        }
    }
    


let result = sumZero([-9,-8,-5,-4,-2,0,1,3,4,9])
console.log(result)


function sumOfPairZero(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right]
    
    if (sum === 0) {
        return [array[left], array[right]]
    }
    else if (sum > 0) {
        right--;
    }
    else {
        left++;
    }
}
}

let result7 = sumOfPairZero([-9,-8,-5,-4,-2,0,1,3,4,9])
console.log(result7)