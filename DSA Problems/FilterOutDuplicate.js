// Q. GIven an Array filter out Duplicate elements and return Unique ele in Array
// [1,1,2,3,4,20,4,5,2] ->[3,20,5]

filterOutDupli =(arr)=>{
    let map = new Map()
    let array=[]
    for(let elem in arr){
        if(map.get(arr[elem]) == undefined) map.set(arr[elem],1)
        else {map.set(arr[elem] , map.get(arr[elem]) +1)}
    }
    console.log(map)
    for(let i of map){
           if(i[1]==1){
            array.push(i[0])
        }
    }
    return array
}
console.log(filterOutDupli([1,1,2,3,4,20,4,5,2]))   //->[ 3, 20, 5 ]