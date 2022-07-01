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
console.log(binarySort([1,2,3,4,5,6],0,6,3))