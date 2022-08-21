const arr = [112, 24, 31, 44, 101, 203, 33, 56];
const minMax=(arr)=>{
    let min = arr[0]
    let max =arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }else if(arr[i]<min){
             min = arr[i]
        }
    }
    return {
        min,max
    }
}
console.log(minMax(arr))