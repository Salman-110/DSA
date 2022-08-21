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

console.log(findUnique([1,1,2,2,3,3,5,5,5,6,7,7]))
// output => 6

// ***********************************************************************

// Q. FIND UNIQUE NUMBERS IN AN ARRAY
function countUnique(array) {
   let uniqueNum = {};
 
   for (i of array) {
     uniqueNum[i] = i;
   }
 
   return Object.values(uniqueNum)
 }

//  console.log(countUnique([1,1,2,2,3,3,5,5,5,6,7,7]))

//  output => [1,2,3,5,6,7]

function uniqueNumUsingMap(arr){
     let map = new Map()
     let result =[]
     for(let i in arr){
        if(map.get(arr[i]) == undefined) map.set(arr[i],1)
        else (map.set(arr[i], map.get(arr[i])+1))
     }
     console.log(map)
     for(let [key,value] of map){
        result.push(key)
     }
     return result
}
console.log(uniqueNumUsingMap([1,1,2,2,3,3,5,5,5,6,7,7]))

function uniqueNum1(arr){
  let map = new Map()
  let result =[]
  for(let i in arr){
     if(map.get(arr[i]) == undefined) map.set(arr[i],1)
     else (map.set(arr[i], map.get(arr[i])+1))
  }
  console.log(map)
  for(let i of map){
     if(i[1]==1){
       result.push(i[0])
     }
  }
  return result
}
console.log(uniqueNum1([1,1,2,2,3,3,5,5,5,6,7,7]))