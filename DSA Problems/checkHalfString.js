// Q. Check if both the halves of the string have some set of character

isHalves=(str)=>{
    if(str.length%2 != 0)  return "no"

    let map ={}
    for(let i in str){
        if(i<str.length/2){
            map[str[i]] = map[str[i]] + 1 || 1
        }else{
            if(map[str[i]]){
                 map[str[i]]--;
            }else{
                return "no"
            }
        }
    }
    return "yes"
 }
 console.log(isHalves("yiaiay"))