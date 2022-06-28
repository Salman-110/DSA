// Q> Cyclically Rotote an array by 1

cyclicallyRotateBYOne = (arr)=>{
      let n = arr.length-1
      for(let i = n - 1; i > 0; i--){
        [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
        
    }
    return arr
}
console.log(cyclicallyRotateBYOne([1,2,3,4,5]))

