const promise = new Promise(function(resolve,reject){
    let str1 = "javascript";
    let str2 = "javascript";

    if(str1 === str2){
        resolve();
    }else{
        reject();
    }
});
promise
      .then(function(){
           console.log("promise resolved!!!")
      })
      .catch(function(){
        console.log("promise rejected")
      })


      //888888****************************************************************

     const Promise1 = function(){ 
        const promise = new Promise(function(resolve,reject){
           const  str1 = "salman";
           const  str2 = "salan";
         if(str1 === str2){
            resolve("string is same")
        }else{
            reject("string is not same")
        }
        })
        return promise
     };

//     const returnPromise = async function(){
//        try{
//          let message = await Promise1()
//          console.log(message)
//         }catch (error){
//             console.log("error: "+ error)
//         }
//      }

//  returnPromise()
let promises = [Promise1,promise]

Promise.all(promises).then(()=>{
    console.log("promise fulllfill")
}).catch(()=>{
    console.log("rejected!!")
})



