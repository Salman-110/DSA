// Sort an Array without using inbukid function.

const sortArry=(arr)=>{

  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
       while(arr[i]<arr[j]){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        console.log(arr)
    }
  }
}
return arr
}
// console.log(sortArry([3,2,5,4,7,6,8,9,1,0]))

// Sort Using bubble sort
//[3,2,5,4,7,6,8,9,1,0]

const BubbleSort=(arr)=>{
    
    for(let i=0;i<arr.length;i++){
        let swap=true
        for(let j=0;j<=arr.length-2;j++){
            if(arr[j]>arr[j+1]){
                arr[j] = arr[j]+arr[j+1]
                arr[j+1]=arr[j]-arr[j+1]
                arr[j] = arr[j]-arr[j+1]
                swap=true
              }
            }
            if(swap==false){
                break;
            }
    }
    return arr
}
console.log(BubbleSort([3,2,5,0,4,7,6,8,9,1]))
