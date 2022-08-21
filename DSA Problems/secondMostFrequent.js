// Q. Find the second Most Frequent number.
//  [4,2,7,5,9,3,7,9,9,0,2,7,4,7] 

secondMostFreq=(arr)=>{
     let map =new Map()
     for(let elem in arr){
        if (map.get(arr[elem])==undefined) map.set(arr[elem],1)
        else {map.set(arr[elem],map.get(arr[elem]) + 1)}
     }
     console.log(map)
     let max = 0;
     let prevMax = 0;
     for(let i of map){
        if(i[1]>max){
            prevMax=max
            max = i[1]
        }
        if(i[1]>prevMax && i[1]<max){
              prevMax = i[1]
        }
    }
        for(let pairs of map){
            if(pairs[1]==prevMax) return pairs[0]
        }
     
}
console.log(secondMostFreq([4,2,7,5,9,3,7,9,9,8,4,8,4,8,8,8,8,8,8,7,7,7,0,2,7,4,7]))   