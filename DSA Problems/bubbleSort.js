// Bubble sort 
// sort an array in an ascending order using bubble sort
//[6,8,66,443,2,,4,534,65,11,8,4]

bullbleSort =(array)=>{
    for(let i=0;i<array.length;i++){    // lopp for itrating over loop for passing 
        let swap = true
       
        for(let j=0;j<=array.length-2;j++){     // loop for comparing adjacent element j and j+1
            if(array[j]>array[j+1]){
                //SWAP
                array[j]=array[j]+array[j+1]
                array[j+1]= array[j]-array[j+1]
                array[j]=array[j]-array[j+1]
            swap=true
            }
        }
        if(swap==false) break;
    }
    return array
}
console.log(bullbleSort([1,2,3,4,5,6,7,8,9]))
