function merge(leftarr,rightarr){
    let left =0
    let right=0
    let result=[]
    while(left<leftarr.length && right<rightarr.length){
      let leftel = leftarr[left]
      let rightel = rightarr[right]
      if(leftel<rightel){
        result.push(leftel)
        left++;
      }else{
        result.push(rightel)
        right++;
      }
    }  
     return [...result,...leftarr.slice(left),...rightarr.slice(right)]
}
function mergeSort(arr){
    if(arr.length<=1)return arr

    const middleElem = parseInt(arr.length/2)
    let leftArr = arr.slice(0,middleElem)
    let rightArr = arr.slice(middleElem)

    return merge(       
         mergeSort(leftArr),
        mergeSort(rightArr)
    )
}
console.log(mergeSort([7,6,5,8,9,4  ,3,2,3,9,0,1]))