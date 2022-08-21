// Find the Sruare root of given number

const square = (n, left, right) => {
    let mid = (left + right) / 2;
    let mul = mid * mid;
    if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
       return mid;
    }else if (mul < n){
       return square(n, mid, right);
    }else{
       return square(n, left, mid);
    }
 }
//  console.log(square(5,0,1))
 // Function to find the square root of n
 const findSqrt = num => {
    let i = 1;
    const found = false;
    while (!found){
       // If n is a perfect square
       if (i * i === num){
          return i;
       }else if (i * i > num){
          let res = square(num, i - 1, i);
          console.log(num,i-1,i)
          return res.toFixed(5);
       };
       i++;
    }
 }
 console.log(findSqrt(21));

 //******************************************************8888888 */

//  SqureRoot=(number,left,right)=>{
//    while(true){
//        let mid =(left+right)/2
//        let mul=mid*mid
//        if(mul===number || (Math.abs(mul -number)<0.00001)){
//            return mid;
//        }
//        else if(mul>number){
//            right=mid
//        }else{
//            left=mid
//        }
//    }
// }

// findSqure=(num)=>{
// let squre=false
// let i=1
// while(squre===false){
//    if(i*i===num){
//        squre=true
//    }
//    else if(i*i>num){
//        var res=SqureRoot(num,i-1,i)
//        console.log(res.toFixed(5));
//        supure=true
//    }
//    i++;
// }
// }
// console.log(findSqure(15))