revStr = (str) => {
    let str2 = str.split("").joint("")

    for (let i = 0; i < arr2.length; i++) {

    }

}

reverse = (words) => {
    let word = words.split("")
    let left = 0
    let right = word.length - 1
    while (left < right) {
        [word[left], word[right]] = [word[right], word[left]]
        left++;
        right--;
    }
    return word.join("")
}

//************************************************************** */
// Q. Reverse word of an sentance

// reverse = (words) => {
//     if (words.length === 1) {
//         return words
//     }
//     return reverse(words.slice(1)) + words[0]
// }
// console.log(reverse("salman"))
reverseSentance = (sentance) => {       //Im Great Coder!!
    let word = sentance.split(" ")
    for (let i = 0; i < word.length; i++) {
        word[i] = reverse(word[i])
    }
    return word.join(" ")
}
// console.log(reverseSentance("im Great coder!!"))


reverse = (word) => {
    let wordd = ""
    for (let i = word.length-1; i >= 0; i--) {
        wordd += word[i]
      }
 return wordd
}
// console.log(reverse("hey"))

sentanceReverse =(Sentance)=>{
    let sentance = Sentance.split(" ")
    let result=""
    for(let i=0;i<sentance.length;i++){
     result  += reverse(sentance[i]) + " "
    }
    return result
}
console.log(sentanceReverse("hey im coder"))