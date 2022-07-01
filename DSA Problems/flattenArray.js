// Q.find the Flatten array using recursion
// [1,2,3,[4,5,6,5,6,[2],[7,8,[9,0]]]]
let output =[]
 flatArr = (arr) =>{
    //    
         for(let i=0; i<arr.length; i++){
            // 2 conditions -> 1/ element is array   2/ element is a Number.

            if( arr[i] === undefined) continue;
            if(Array.isArray(arr[i])){       // 1/ if element is array  do recursion 
                (flatArr(arr[i]))
            }
            else{                            //2/ if element is number add/push it in output array
                  output.push(arr[i])
            }
       }
            return output
}
console.log(flatArr([1,2,,,,,[3,4],5,[6],7,8,[9,10,11,12],13,14]))