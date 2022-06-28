// Q. Muliply  elements of array by 2
let array = [1,2,3,4,5]   // output -> [ 2, 4, 6, 8, 10 ]

let result =[]

for(let i=0;i<array.length;i++){
    result.push(array[i] *=2)
    // console.log(result)
}

//Muliply  elements of array by 2 by using map 

let arrayy = [10,20,30,40,50,60]

let resultt = arrayy.map(ele=>(ele*2))
console.log(resultt)

//Convert number into binary

let arrayyy = [1,2,3,4,5,6]

let resulttt = arrayyy.map(x=>x.toString(2))

console.log(resulttt)


// Q. Muliply  elements of array by 2
let array1 = [1,2,3,4,5]   // output -> [ 2, 4, 6, 8, 10 ]

let result1 =[]

for(let i=0;i<array1.length;i++){
    result1.push(array1[i] *=2)
    // console.log(result)
}
