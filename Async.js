// Async function is use for context Switch because javaScript is a single thread 
// if we not use the async function then CPU is idle while some work is taking longer time ;

console.log("hi") ;
setTimeout(function(){
    console.log("hi there from inside") ;
},5000) ;
console.log("after some time") ; 


const fs= require("fs") ;

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(err) ;
    console.log(data) ;
}) ;

console.log("Done") ;