// Q. Find number in an array using binary Search

binarySort = (arr,start,end,num)=>{
       
       while(end>=start){
           let mid = Math.round(start + end) / 2
           if(num == arr[mid])  return mid + 1
           if(num > arr[mid])   return binarySort(arr, mid + 1 , end, num)
           if(num < arr[mid])   return binarySort(arr, start , mid - 1, num) 
       }
       return false 
}
// console.log(binarySort([1,2,3,4,5,6],0,6,3))

searchInSorted=(arr, N, K)=>{
    //your code here
     let start = 0
     let end = N-1
    
    while(start<end){
        let mid = Math.round((start+end)/2)
        // console.log(mid)
       if(arr[mid]==K){                            // Working
           return true
       }
        else if(K>arr[mid]){  
         start = mid +1
        }
       else {
          end =mid - 1
        }
     }
       return false
}
console.log(searchInSorted([1,2,3,4,5,6,7],7,10))

findIndex=(arr,x)=>{
let first =-1
let last = -1
let result =0 ,j
for(let i=0;i<arr.length;i++){
    if(arr[i]==x){
        first = i ;
         j = i + 1
       
    }

    while(arr[j]==x){
        last = j
        console.log("hi")
        j++;
      
    }
    
    if(last == -1){
      console.log("Hi")
        last =first
    }
    break;
} 
    result = (first +" "+ last)
    return result
}
// console.log(findIndex([1,2,3,4,5,2,3,4,5,3,4,5],3))


find=(arr,x)=>{
    
    let first =arr.indexOf(x)
    let last = arr.lastIndexOf(x)

  return first +" "+ last
}
// console.log(find([1,2,3,4,5,2,3,4,5,3,4,5],3))