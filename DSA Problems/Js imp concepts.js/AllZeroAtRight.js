// sort an Array so that all zero moved to words right 
// [3,2,0,4, 0,5,6,0]

sortDec=(array)=>{
    let j =0
    for(i=0;i<array.length;i++){
        if(array[i] != 0){
            swap(array , j , i)
            j++
         }
    }
    return array
}

swap=(arr , a, b)=>{
    let temp = arr[a];
     arr[a] = arr[b];
    arr[b] = temp
}

console.log(sortDec([3,2,0,4, 0,5,6,0]))