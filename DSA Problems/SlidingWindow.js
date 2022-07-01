function winSlide9(Arr,K){
    let sum =0
    let mxsum = 0 
    let i=0
    let j=0
  
    while(j<Arr.length){
        sum+=Arr[j]
        console.log(sum)
        if(j-i+1<K) 
          j++;

        else if(j-i+1 == K){
              // 1 unit
            sum -=Arr[i]
            i++;
            j++;7
        }
    } 
    return sum
}
  console.log(winSlide9([1,4,3,4,5,6,8,9],3))

  // *************************************************************************
  //Q. find smallest substring length with all distinct character 
  function smallestSubstringLen(str) {
    let count=[]
    let start=0,end=0
    let uniqueChar=0
    let substrLen=0
    for (var i = 0; i < str.length; i++) {
      count[i]=0                                           // [0,0,0,0,0,0]
    }
    
    for (var i = 0; i < str.length; i++) {
      if(i===0 && count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0){
        count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++                     //count=1
        uniqueChar++                                                        // uniquechar=1
        substrLen++                                                         // subsstrlen =1
        continue
      }
      if (count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0) {
        uniqueChar++
      }
      count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
      substrLen++
      end++
    }
    while (count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]!==1) {
      start++
      count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]--
      substrLen--
    }
    while(count[str[end].charCodeAt(0)-'a'.charCodeAt(0)]!==1){
      end--
      
      count[str[end].charCodeAt(0)-'a'.charCodeAt(0)]--
      substrLen--
    }
    return substrLen
    
 }
 
//  console.log(smallestSubstringLen('aabbbcc'))

//****************************************************************8 */

// Q.Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

smallestSubstringLenW = (str)=>{

          
  

}
