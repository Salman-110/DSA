//  https://youtu.be/E3dboLSBeJc    - refer this video

// 1. shallow copy = do by assigning variable 
//                  eg) let arr1 = {name : "salman"}
//                      let arr2 = arr1
//                           arr2.name = "amit"
//                       arr1 = { name : "amit"}     shollow copy
//                       arr2 = {name : "amit"}      shallow copy


// 2. deep copy = 1) Partial deep copy -> Spread Operator(...)  && Object.assign({},arr1)
//                2) Nested deep copy -> JSON.parse(JOSN.stringify(arr))  
//                   - works in nested copy i.e. Object in object
//                   - but converts oject data type to  STRING -"" 
//                   - Function disappears in nested deep copy 
//                3) Full deep copy - using 3rd party package (LODASH) - fully deep clone
//                   - Doesn't convert data type , it is same as original 
//                   - Function apprears same as original copy.


let arr = {name:"salman", area:{street:"fc road" , city: "pune"},city:"pune"}
let arr2 =Object.assign({},arr)
arr2.area.street = "amit"

// console.log(arr)

// console.log(arr2)
