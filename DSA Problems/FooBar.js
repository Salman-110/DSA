// Given a NUMBER if the number is multiple of 3 return "Foo".
// IF the NUMBER is multiple of 5 return "Baar".
// IF the NUMBer is multiple of both 3 and 5 return "FooBar".
// If tthe NUMBER is  NOT multiple of both this number return "NoFooBaar".

chechFoobar =(num)=>{

    if(num%5==0 && num%3==0)  return "FooBaar"  
    if(num%3==0)  return "Foo"
    if(num%5==0)  return "Baar"
         else return "NoFooBaar"
}
console.log(chechFoobar([9]))
console.log(chechFoobar([50]))
console.log(chechFoobar([30]))
console.log(chechFoobar([32]))

