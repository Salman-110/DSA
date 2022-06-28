// Q. Check Palindromic Number
isPalindromeNum = (num)=>{

    let numm = String(num).split('').map(Number)    // convert num into string for split("")  **CANT SPLIT NUM DIRECTLY
    let num2 = numm.reverse().join("")               // reversing num and joining again.

    if (num == num2) {                               // Comparing original and reversed number
        return true
    }
    return false
}
// console.log(isPalindromeNum(12331))


//********************************************************** */
// Q.Chech Palindromic String

isPalindromeStr=(str)=>{

    let str2 = str.split("").reverse().join("")

    if(str == str2) return true
    else return false
}
// console.log(isPalindromeStr("Salam"))

//**************************************************************** */
// Q.check Palindromic num using two pointer

ispalindrome = (str)=>{

    let left = 0
    let right = str.length -1
 
    if(left<right){

        if(str[left] === str[right]){
            left++;
            right--;
        }
          else return 0
    }
    return 1
}
console.log(ispalindrome( "salas"))

// ***********************************************************
// Q. check palindromic STRING using RECURSION

isPalindrome = (str,left,right)=>{

    while(left<right){
        if(str[left] === str[right]){
            return isPalindrome(str, left+1, right-1)
        }
        else return false
    }
        return true
}
// console.log(isPalindrome("salan",0,4))

//************************************************************************* */
// Q.check palindromic NUMBER using RECURSION



