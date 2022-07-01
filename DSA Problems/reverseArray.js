// Reverse an Array without using extra array

revArray =(arr)=>{
    let i=0;
    let j=arr.length -1
while(i<j){
    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
    i++;
    j--;
}
return arr
}
// console.log(revArray([1,2,3,4,5]))    // -> [ 5, 4, 3, 2, 1 ]

reverseArr =(arr)=>{
    let left =0; right= arr.length-1

    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++;
        right--;
        }
        return arr
}
// console.log(reverseArr([1,2,3,4,5]))  // -> [ 5, 4, 3, 2, 1 ]

reverseArray=(array)=>{
    let arr=[]
    for(let i=array.length-1;i>=0;i--){
        arr.push(array[i])
    }
    return arr
}
// console.log(reverseArray([1,2,3,4,5]))   // -> [ 5, 4, 3, 2, 1 ]



