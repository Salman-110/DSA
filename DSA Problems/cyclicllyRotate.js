// Q> Cyclically Rotote an array by 1

cyclicallyRotateBYOne = (arr)=>{
      let n = arr.length-1
      for(let i = n; i > 0; i--){
        [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
      
    }
    return arr
}
console.log(cyclicallyRotateBYOne([1,2,3,4,5]))

cyclicallyRotateByK =(arr,k)=>{
    for(let i=k;i>0;i--){
       arr.unshift(arr.pop())
       console.log(arr)
    }
    return arr
}
// console.log(cyclicallyRotateByK([1,2,3,4,5],2))



