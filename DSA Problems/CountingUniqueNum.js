// Q. find the unique number from an array
// [1,1,2,2,3,3,5,5,5,6,7,7]

findUnique = (arr)=>{
   
    if(arr.length){
      let i =0
      for(let j=1;j<arr.length;j++){
         if(arr[i] != arr[j]){
            i++;
            arr[i]=arr[j];
         }
      }
      return i+1
    }
}

// console.log(findUnique([1,1,2,2,3,3,5,5,5,6,7,7]))
// output => 6

// ***********************************************************************

// Q. FIND UNIQUE NUMBERS IN AN ARRAY
function countUnique(array) {
   let uniqueNum = {};
 
   for (number of array) {
     uniqueNum[number] = number;
   }
 
   return Object.values(uniqueNum)
 }

 console.log(countUnique([1,1,2,2,3,3,5,5,5,6,7,7]))

//  output => [1,2,3,5,6,7]