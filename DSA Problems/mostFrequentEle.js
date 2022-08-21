//  https://www.codevscolor.com/javascript-find-highest-occurrence-array-element

// Q,. Most frequent number in an array

let array = [2,3,3,3,4,5,6,3,3,7,5]

let hashMap = {}
let maxValue = 0
let maxCount =0

for(let i of array){
    if(hashMap[i]== undefined) hashMap[i]= 1
    else hashMap[i]++

    if(hashMap[i]>maxCount){
        maxValue = i
        maxCount = hashMap[i]
    }
}
console.log( `most frequent Number :${maxValue}, count: ${maxCount}`)