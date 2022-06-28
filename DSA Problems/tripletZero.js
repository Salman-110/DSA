findTriplets = (arr2, n)=>{
    let arr = arr2.sort((a,b)=>a-b)
  
   for(let left =0; left<n-2;left++){
    let right =n-1;
    let mid = left + 1
    
    while(mid<right){
        if(arr[left] +arr[mid] + arr[right] >0){
            right--;
        }
        else if(arr[left] + arr[mid] + arr[right] < 0){
          mid++;
          
        }else 
          return true
    }
}
return false  
}
console.log(findTriplets([0, -1, 2, -3, ],5))  