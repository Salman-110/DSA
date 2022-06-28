// Q.fing the maximum number in an array
// [1,2,3,4,5,6,7,8]

function maxNum(Arr){
    // let max =Math.max(...Arr)
    // return max

    let max = Arr[0]
    let sum = -1
    for(let i=0;i<Arr.length;i++){
        if(Arr[i]>max){
            sum = max
            max = Arr[i]
            
         }
        else if(sum<Arr[i] && max>Arr[i]){
            sum = Arr[i]
     
        }
    }
    return sum
}

// console.log(maxNum([1,2,10,4,5,6,7,11,13,12,97,8,76,45,89,]));


// Second Approch   
print2largest = (arr)=>{
    //code here

   let max1=Math.max(...arr)
    arr=arr.filter(a=>a<max1)
    return arr.length>0 ? Math.max(...arr) : -1
    
}
console.log(print2largest([1,2,10,4,5,6,7,11,13,12,8,76,45,89,]))
