rotateArr=(arr, d, n)=>{
    let count = 0;
    
    while(count != d){
        arr.push(arr[0]);
        arr.splice(0, n);
        count++;
    }
    return arr;
}
// console.log(rotateArr([1,2,3,4,5],3,1))