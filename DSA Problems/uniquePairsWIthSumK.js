// Q. FInd thet Unique Pairs of elem from an array with Sum K

pairSumK =(arr,k)=>{
    let map = new Map()
    for(let elem in arr){
        if(map.get(arr[elem])== undefined) map.set(arr[elem] ,1)
        else map.set(arr[elem], map.get(arr[elem]) + 1)
    }
    console.log(map)
     let pair =new Map()
     for(let [key,value] of map){
        if(map.get(k-key) && !(pair.has(key) || pair.has(k-key)) ){  //pairs of elements with sum k and getting unique pairs
            pair.set(key,k-key)
        }
     }
     return pair
}
console.log(pairSumK([2,1,3,4,2,5,4],5))  