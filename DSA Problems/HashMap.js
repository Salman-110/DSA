// Q. fing the element, frequency > 1

duplicateFreq = (arr) =>{
         
    let frequencies = new Map()

    for(let i in arr){
        if(frequencies.get(arr[i]) == undefined)  frequencies.set(arr[i],1)
        else frequencies.set(arr[i], frequencies.get(arr[i])+1)
    }
    console.log(frequencies)
     let result =[]
    for(let pairs of frequencies){
        if(pairs[1] > 1) result.push(pairs[0])
    }
    return result
}

// console.log(duplicateFreq("lssssn"))

//************************************************************************ */
// Q. Number with max frequency
// eg. [1,1,2,3,4,4,5,4,6]     value- 4   maxCount- 3

maxFreq = (arr)=>{
    let hashMap = new Map()
    let Value = 0
    let maxCount = 0
    for(let elements of arr){
        if(hashMap[elements] == undefined){
            hashMap[elements] = 1
        }
        else {
            hashMap[elements]++
        }
      console.log(hashMap)
    if(hashMap[elements] > maxCount){
        Value = elements
        maxCount = hashMap[elements]
    }
}
    let result = []
    result[0] = Value;
    result[1] = maxCount
    return result   
}
// console.log(maxFreq([1, 2, 3, 4, 1, 1, 1, 3,4,4,4,4,4, 4]))


//*8888**********************************************************************

//Check if max occurring character of one string appears same number of times in other
// "hello world"  -> "aalllabbowddd"    

function solution(a,b) {
    //Write your solution here
      let map = new Map()
      for(let elem in a){
     if(map.get(a[elem]) == undefined) map.set(a[elem],1)
     else map.set(a[elem],map.get(a[elem]) + 1)
      }
      let letter =""
      let count =0
      for(let pair of map){
          if(pair[1]>count){
              count  =  pair[1]
              letter = pair[0]
          }
      }
      let mapp = new Map()
      for(let elem in b){
    if(mapp.get(b[elem])== undefined) mapp.set(b[elem],1)
          else mapp.set(b[elem],mapp.get(b[elem]) + 1)
      }
     for(let pair of mapp){
         if(pair[0]==letter && pair[1]==count) return "Yes"
     }
      return "No"
  }
//   console.log(solution("hello world","aaallbbbbcc"))

secFreq=(a)=>{

    let map = new Map()
      for(let elem in a){
     if(map.get(a[elem]) == undefined) map.set(a[elem],1)
     else map.set(a[elem],map.get(a[elem]) + 1)
      }
    console.log(map)
      let letter =""
      let count =0
      for(let pair of map){
          if(pair[1]>count){
              count  =  pair[1]
              letter = pair[0]
          }
      }
   


}
console.log(secFreq('aaabbcccc'))
  