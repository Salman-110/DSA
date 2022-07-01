// Q. Sort the two greatest element from an array and return remaining in sorted

sort2gretest =(arr)=>{

    let max1=Math.max(...arr)
    let arr1=arr.filter(x=>x<max1)
    let max2=Math.max(...arr1)
    let arr2=arr1.filter(x=>x<max2)
    return arr2.sort()
}
// console.log(sort2gretest([5,6,3,2,7,9,5,3]))  // 


//**********************************Without using inBuit()****************************************** */
//1.for loop over arr ->  elem b1=9  arr-b1 
sort2gretestt=(arr)=>{
      let largestElem =0
      let getSecondLargest =0
      let arr1=[],arr2=[]
      for(let i in arr){
        if(arr[i]>largestElem){
             largestElem = arr[i]
         }
     } for(let j in arr){
        if(arr[j]!=largestElem){
            arr1.push(arr[j])
        }
     }
     for(let i in arr1){
        if(arr1[i]>getSecondLargest){
            getSecondLargest = arr1[i]
         }
     } for(let j in arr1){
        if(arr1[j]!=getSecondLargest){
            arr2.push(arr1[j])
        }
    }
          return arr2.sort()
}
console.log(sort2gretestt([5,6,3,2,7,9,5,3]))