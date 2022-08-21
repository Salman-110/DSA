// Simplify the array ( convert it into 1D array) 
// let array = [1, [2, 3], 2, [55, 2, 3], [2, 3, [4, 5], 6, 1], 4, 5];
let array =[]
function flattenArray(arr){
      
      for(let i=0;i<arr.length;i++){
         if(Array.isArray(arr[i])){
               flattenArray(arr[i])
         }else{
              array.push(arr[i])
         }
      }
      return array
}
console.log(flattenArray([1, [2, 3], 2, [55, 2, 3], [2, 3, [4, 5], 6, 1], 4, 5]))


// Sort the array 
const arr = [8, 12, 44, 34, 55, 11, 22, 66, 65, 33, 4];
 function sortArry(arr){
    for(let i=0;i<arr.length;i++){
        let swap = true
        for(let j=0;j<arr.length;j++){
            while(arr[j]>arr[j+1]){
            arr[j] = arr[j] + arr[j+1]
            arr[j+1] = arr[j] - arr[j+1]
            arr[j] = arr[j] -arr[j+1]
            swap = true
        }
        }
        swap = false
    }
    return arr
 }
 console.log(sortArry([8, 12, 44, 34, 55, 11, 22, 66, 65, 33, 4]))

// Print Pyramid

function printStar(){
     let  n =5
     let string =""
     for (let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            string+=" "
        }
        for(let k=0;k<2*i-1;k++){
            string +="*"
        }
        string+="\n"
     }
   return string
}
console.log(printStar())

//  #) write a schema for blog.
// const mongoose = require("mongoose")

// const blogModel = new mongoose.Schema({
    
//     name:{
//          type:String,
//          required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//          type:String,
//          required:true
//     }
// },{timestamp:true})

// // module.exports = blogModel


// #) write down the systax for promise.

const promise = new Promise( function(resolve,reject){
      resolve();
      reject()
}).then(()=>{console.log("promise rejected")})
.catch((err)=>console.log(err))



