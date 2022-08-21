// Bubble sort 
// sort an array in an ascending order using bubble sort
//[6,8,66,443,2,,4,534,65,11,8,4]

bullbleSort =(array)=>{
    for(let i=0;i<array.length;i++){    // lopp for itrating over loop for passing 
        let swap = true
       
        for(let j=0;j<=array.length-2;j++){     // loop for comparing adjacent element j and j+1
            if(array[j]>array[j+1]){
                //SWAP
                array[j]=array[j]+array[j+1]       // Using  a = a+b    a=1  b=2  3
                array[j+1]= array[j]-array[j+1]           // b = a-b     3 - 2    1         
                array[j]=array[j]-array[j+1]              // a = a-b     3 - 1    2   hence, a = 2 , b  =  1          
            swap=true
            }
        }
        if(swap==false)
            break;
    }
        return array
}
console.log(bullbleSort([5,3,2,5,7,5,4,3,2,9,0,7,6,2,3,1]))
