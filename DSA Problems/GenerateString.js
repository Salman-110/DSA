generteString=(num)=>{
    let alphabet =  "abcdefghijklmnopqrstuvwxyz"
    let finalStr ="", currIndex =0

   while(currIndex<num){
    finalStr+=alphabet[currIndex]
    currIndex++;
    }
    return finalStr
}
generateStringOfNum = (arr)=>{
    for(let i in arr){
        arr[i] = generteString(arr[i])
    }
}
let result = [1,2,3,4,5]
generateStringOfNum(result)
console.log(result)

//*************************************************** */
encodeNumber=(arr)=>{
  
    let encodeArr=[];

    for(let i=1;i<=arr.length;i++){
        encodeArr.push(generteString(i))
       }
     return encodeArr
}
console.log(encodeNumber([1,2,5,3,4]))
