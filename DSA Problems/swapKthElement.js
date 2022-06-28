 //Q. Swap the kth element

function swapEle(arr, k) {

    let left = k
    // console.log(left)

    let right = arr.length - k + 1
    // console.log(right)
   let temp = right
    right = left
    left = temp                            //NOT WORKING

   return temp
}
// console.log(swapEle([1,2,3,4,5,6,7,8],3))

// Q. Swap elements without using 3rd variable

let a=2,b=3

// a = a+b    // a+b = 2+3 = 5
// b = a-b    // a-b = 5-3 = 2
// a = a-b    // a-b = 5-2 = 3  
// Hence, a=3 , b=2
[a,b]=[b,a]
console.log(a,b)



