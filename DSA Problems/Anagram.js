// Q.Checking the String is anagram or not

//"listen" -> "silent"

function isAnagram(a, b)
    {
      let str1 =a.split("").sort().join("")
     
      let str2 =b.split("").sort().join("")

      if(str1.length !== str2.length){
          return "NO BRO, IT'S NOT ANAGRAM!!"
      }
      if(str1===str2){
          return "YEAHH!! IT'S ANAGRAM."
      }
          return "NO BRO, IT'S NOT ANAGRAM!!"
    }
    //   console.log(isAnagram("listen","silent"))

      //******************************************************** */
      //  "listen" ->  "silent"
       isAnagramm = (str , strr)=>{
        
         if(str.length != strr.length)  return false

         let map ={}
         for(let item of str){
          map[item] = (map[item] || 0) + 1
         }
         for(let letter of strr){
            if(!map[letter])   return false
            
         }
         return true
      }
    //   console.log(isAnagramm("listen" , "silent"))

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
     console.log(isAnagrammm("12121","12121"))