//  https://www.codevscolor.com/javascript-find-highest-occurrence-array-element

// Q,. Most frequent number in an array

let array = [2,3,3,3,4,5,6,3,7,5]

let hashMap = {}
let maxValue = 0
let maxCount =0

for(let elements of array){
    if(hashMap[elements] == undefined){
        hashMap[elements] = 1
    }else {
        hashMap[elements]++
    }
    
    if(hashMap[elements] > maxCount){
        maxValue = elements
        maxCount= hashMap[elements]
    }

}
console.log( `most frequent Number :${maxValue}, count: ${maxCount}`)