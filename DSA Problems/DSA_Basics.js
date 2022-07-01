//*********************************** MAP FUNCTION ******************************* */
// Q. Muliply  elements of array by 2
let array = [1,2,3,4,5]   // output -> [ 2, 4, 6, 8, 10 ]

let result =[]

for(let i=0;i<array.length;i++){
    result.push(array[i] *=2)
    // console.log(result)
}

//Muliply  elements of array by 2 by using map 

let arrayy = [10,20,30,40,50,60]    //-> [20,40,60,80,100,120]

let resultt = arrayy.map(ele=>(ele*2))
// console.log(resultt)

//Convert number into binary

let arrayyy = [1,2,3,4,5,6]

let resulttt = arrayyy.map(x=>x.toString(2))

// console.log(resulttt)

//*************************************************************** */

 const users = [
     {fisrtName: "salman" , lastName:"Sayyed" , Age:25},
     {fisrtName: "Asma" , lastName:"Sayyed" , Age:23},
     {fisrtName: "sana" , lastName:"Sayyed" , Age:22},
     {fisrtName: "Mohsin" , lastName:"Sayyed" , Age:23}
 ]

 let NamesList = users.map(x=> x.fisrtName +" "+ x.lastName)   //->[ 'salman Sayyed', 'Asma Sayyed', 'sana Sayyed', 'Mohsin Sayyed' ]
//  console.log(NamesList)

 let age = users.filter(x=>x.Age<25).map(x=>x.fisrtName)                          // -> fisrtName of user age less then 25 
//  console.log(age)


//*******************************FILTER FUNCTION************************* */
//Q. Get the odd element by filtering even elements from array
let array1 = [1,2,3,4,5,6,7,8]

let result1 = array1.filter(ele=>ele%2)          // filtering odd elements
let result2 = array1.filter(ele=>ele%2===0)      // filtering even elements
let result3 = array1.filter(ele=>ele>4)          // filtering greater then 4

// console.log(result1)
// console.log(result2)
// console.log(result3)

//********************************REDUCE FUNCTION ********************************* */

// Q. Find the sum of array using reduce
let array2 = [1,2,3,4,5,6,7,8]

let output = array2.reduce((sum,curr)=>{
    sum = sum + curr
    return sum
},0);
// console.log(output)

// Q.FInd maximum value in an array 

let array3 = [10,4,5,6,7,8,9]

let output1 = array3.reduce((max,curr)=>{
       if(curr>max){
        max = curr
      }
      return max
},0);

// console.log(output1)

//Q. Find the count of the users age
let ageCount = users.reduce((acc,curr)=>{
    if(acc[curr.Age]){
          acc[curr.Age]++
    }else {
        acc[curr.Age] = 1
    }
    return acc
},{})
// console.log(ageCount)

// -> fisrtName of user age less then 25 
let Users = [
    {fisrtName: "salman" , lastName:"Sayyed" , Age:25},
    {fisrtName: "Asma" , lastName:"Sayyed" , Age:23},
    {fisrtName: "sana" , lastName:"Sayyed" , Age:22},
    {fisrtName: "Mohsin" , lastName:"Sayyed" , Age:23}
]

let usersFnameOfAge = Users.reduce((acc,curr)=>{
         if(curr.Age <= 22){
              acc.push(curr.fisrtName)
         }
          return acc
},[])
// console.log(usersFnameOfAge)

//888888888*********************************************

// Merge two Arrays using spread opetrator

let arr1 =[1,2,3,4,5]  
let arr2 = [6,7,8,9]
let arr3 = [...arr1 ,...arr2]
console.log(arr3)





