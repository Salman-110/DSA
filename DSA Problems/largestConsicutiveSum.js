// Q.find the Largest conscutive sum of the N in an given Array
// e.g [1,2,3,4,5,6,7,8,9] N=3  Ele =10
// Lsum = 24

//  formula =  Ele - N +1 = loop run time -> 9 - 3 + 1 = 7

largestSum = (arr,K) => {
    let sum =0
    
    for(let i=0; i<arr.length-K+1;i++){
        let temp =0 
        for(let j =0;j<K;j++){
             temp += arr[i + j]           //in Doubt how this i+j is working here!!!!!
        }
            if(temp > sum){
                sum = temp
            }
        }
        return sum
}
console.log(largestSum([1,2,3,14,5,6,7,8,9],2))

// ******************************************************************************************
// Q. LArgest consecutive using sliidng window
//[1,2,3,4,5,6,7,8,9]
largeConSum = (arr,N) =>{

    let sum= 0
    let i =0;
    let j =0;

    while(j<arr.length){
          sum +=arr[i]
    
       if(j-i+1 < N){
        j++;
        }
       else if(j-i+1 == N){
           sum -=arr[i]
           i++;
         }
    }
       return sum
}
// console.log(largeConSum([1,2,3,4,5,6,7,8,9],4))

// ********************************************************************************


//**************************************************8 */
