// a =[6,1,2,8,3,4,7,10,5]

missingNum=(arr)=>{
    let result =0
    let array= Math.max(...arr)
    let sum1 = array * (array + 1)/2
    sum2  = 0
    for(let i in arr){
       sum2 +=arr[i]
     }
     result = sum1-sum2
     return result
}
console.log(missingNum([6,1,2,8,3,4,7,10,5]))   //-> 9