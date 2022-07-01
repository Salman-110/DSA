// Chechket wheather the input is integer or not

checkInt =(input)=>{

     let isNum = true

     for(let i in input)
     if(input[i]>="0" && input[i]<="9") continue;
     else {
         isNum = false  
         break;
    }
     return isNum
}
console.log(checkInt("1234455666656575756756765"))

//************************************************************ */

checkIntWithRegex =(input)=>{

    let regex = new RegExp("^[1-9]+$")

   return regex.test(input)
}
console.log(checkInt("123445566665657575756765"))

//