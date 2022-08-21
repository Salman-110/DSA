// CALLBACK FUNCTION

//  The function that is passed as an argument inside of another function is called a callback function.


function main(name,callBack){    // function passed as an argument
    console.log(name)
    callBack()
}

function callME(){                       // independent function   c
    console.log("im from callBack2")                                
}

setTimeout(()=>{
    main("salman",callME)
},1000)                          // calling main function and it will execute after 2s and second funtion will wait for first function to execute

// Output -> salman
//          im from callBack2

//The benefit of using a callback function is that you can wait for the result of a time taking previous function call 
//  and then execute another function call.
// If we dont use callback function the first time taking functions result will be returned after second function.

  
 
 

 
 
 

 
