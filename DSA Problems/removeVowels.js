removeVowels=(s)=>{
    //code here
    
    console.log(s)
    let str=""
    for(let i=0;i<s.length;i++){
        if(s[i] != "a" && s[i]!="e" && s[i] != "i"&& s[i]!='o' && s[i]!="u")
        str+=s[i]
       
    }
    return str
 }
 console.log(removeVowels("salman"))
