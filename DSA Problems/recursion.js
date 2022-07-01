//Q. find sum of number from 1 to N

recursiveSum = (N)=>{
    let sum =0
    if(N === 1){
        return 1
    }
    else{
         console.log(N)
        recursiveSum(N-1)
    }
}
// recursiveSum(15)


// *******************************************************

ispalindrome = (str ,left ,right)=>{
 
    if(left<right){

        if(str[left] === str[right]){
            return ispalindrome(str  , left+1, right-1)
        }
        else{
             return 0
            }
    }
    return 1
}
console.log(ispalindrome( "salas", 0,4))

// ***************************************************************************
// Q. reverse the string using recursion

revStr = (str) =>{
// ""  -> "namlas"                           
    if(str.length <= 1){
        return str
    }
    //  console.log(str)
        return str.slice(-1) + revStr(str.slice(0,-1))
   }

// console.log(revStr("12345"))

// *************************************************
//  Q. reverse the Number using recursion


revNum = (num) =>{
// [12345]
    if(num > 0){
         result = result * 10 + num % 10
         return revNum(parseInt(num / 10))
    }
        return result
}
// console.log(revNum(12345678))

// *************************************************
revNumber = (num , result = 0) =>{
          
        if(num>0){
            // return revNumber(Math.floor(num/10) , result * 10 + num % 10)
        }
        return result
         
    }
    // console.log(revNumber(5609859069857678))

    // **************************************************************
// Q.find the Flatten array using recursion
// [1,2,3,[4,5,6,5,6,[2],[7,8,[9,0]]]]
let output =[]
 flatArr = (arr) =>{
       
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
// console.log(flatArr([1,2,,,,,[3,4],5,[6],7,8,[9,10,11,12],13,14]))

// ***********************************************************************************

capitalStr = (arr)=>{
          
    let result =[]
    if(arr.length ==0){
           return []
    }  else {
    let s = arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(s)
   
    }
    return result.concat(capitalStr(arr.slice(1)))
}
//  console.log(capitalStr(["xyz","pqr","abc","def"]))

//  *******************************************************
// Q. Reverse an element in an array
// ["hii to all"] -> ["iih ot lla"]      ih    hi   ih
// 1. make Seperate recursive function to reverse an element
    //  -> 1. return same function by slice(1) and adding ele(0)
// 2. In another main funtion  -> 1.Split string in array
// 3. for loop to etarate through each element
// 4.call reverse function to reverse each element in array
// 5. return new array with .join

reverse=(ele)=>{
    if(ele.length <= 0) return ""
    else{                                            // [ 'hii', 'to', 'all' ]   ii +  h -> iih
        return (reverse(ele.slice(1)) +  ele[0])      //["iih ot lla"]    ot
    }
}

revEle = (array) =>{
     let str1 = array.split(' ')
     let newStr = []
     for(let i=0; i<str1.length;i++){
        
         newStr.push(reverse(str1[i])) 
          }
          return newStr.join(" ")
     }
console.log(revEle("hii to all"))

// *****************************************************

// Q. check the number is palindrome or not

isPlainNum = (arr2)=>{
    let arr  = arr2.toString()
    if(arr.length==1) {return true}
     return (arr[0] == arr.slice(-1) && isPlainNum(arr.slice(1,-1)))
}
console.log(isPlainNum(121))

// ************************************
func= (arr) =>{
    // if(arr.length==1) return 1
    
    return arr * func(arr-1)
}
// console.log(func([1,2,4,5,6,7]))

// *******************************************************
function power(b,exp){
    if(exp==0){
      return 1
    }
    return b*power(b,exp-1)
  }
//   console.log(power(2,4))

//   ******************************************

let myPow = function(x, n) {
    if(n===0) return 1
    
    if(n===1) return x;
    if(n<0) {    // for negative power
        x= 1/x
        n = -n
    }
    if(n%2 !== 0){
        return myPow(x, (n-1)/2) ** 2 * x
    }else{
        return myPow(x, n/2) ** 2
    }
 
};

// console.log(myPow(16,-2))

//************************************************************* */




  
 