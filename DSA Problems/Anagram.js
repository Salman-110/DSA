// Q.Checking the String is anagram or not

//"listen" -> "silent"

function isAnagram(a, b)
    {
      let str1 =a.split("").sort().join("")
      console.log(str1)
      let str2 =b.split("").sort().join("")
      console.log(str2)
      if(str1.length !== str2.length){
          return "NO BRO, IT'S NOT ANAGRAM!!"
      }
      if(str1===str2){
          return "YEAHH!! IT'S ANAGRAM."
      }
          return "IT'S NOT ANAGRAM!!"
    }
      console.log(isAnagram("listen","silaant"))


      //******************************************************** */
      //  "listen" ->  "silent"
      function anagram(a,b){
        if(a.length!=b.length) return false
    
        for( let i of a ){
               if(obj[i]==undefined) obj[i]=1
        else obj[i]+=1
        }
        for(let i of b){
            if(obj[i]==undefined || obj[i]<0) return false
        else  obj[i] -= 1
    }
        for(let i in obj){
        if(obj[i]!==0) return false
    }
    return true
    }
    
    let obj={}
    console.log(anagram("silent","silenn"))

      //****************************************************************** */
    // Q. Check anagram uing Map()
     isAnagrammm=(str,strr)=>{
    
        if(str.length != strr.length) return false

        let map = new Map()
        for(let i in str){
            if(map.get(str[i]) == undefined)  map.set(str[i],1)     //mapping count of elements
            else map.set((str[i]), map.get(str[i]) + 1)
        }
        // console.log(map)
        for(let i in strr){
            if(map.get(strr[i]) == undefined)  return false
            else map.set((strr[i]), map.get(strr[i]) - 1)
            // console.log(map)
        }
        for(let i of map){
            if(i[1] !=0) return false
        }
        return true
     }
     console.log(isAnagrammm("12121","12122"))

    //  /******************************************************8 */
  // NUMBERS ANAGRAM
    isAnagramm = (str1 , strr2)=>{

        let str = String(str1)
        let strr = String(strr2)
 
        if(str.length != strr.length) return false
 
        let map = new Map()
        for(let item in str){
         if(map.get(str[item])=== undefined) map.set(str[item], 1)
         else(map.set(str[item],map.get(str[item]) + 1))
        }
        console.log(map)
         for(let elem in strr){
             if(map.get(strr[elem])== undefined) return false
             else(map.set(strr[elem],map.get(strr[elem]) - 1))
         }
         console.log(map)
         for(let i of map){
             if(i[1]!=0) return false
         }
         return true
     }     
    
  console.log(isAnagramm(121332,121232))