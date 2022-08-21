
function main(){
   
    console.log("start")

    setTimeout((
       function display(){ console.log("logic1")}
    ),3000)

    setTimeout((
        function display(){ console.log("logic2")}
     ),0000)

    setTimeout((
        function display(){ console.log("logic3")}
     ),1000)

    console.log("finish")
}
main()