function subsets(nums) {
    const result =[[]]
    for(let val of nums){
        const length = result.length
        for(let i=0;i<length;i++){
            let tmp = result[i].slice(0)
            tmp.push(val)
            result.push(tmp)
            
        }
    }
    return result
};

console.log(subsets([1,2,3]))