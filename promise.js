function myDwnSetTimeout(fn, duration){
    setTimeout(fn, duration) ;
}

myDwnSetTimeout(function(){
    console.log("Hi there") ;
},1000) ;   

setTimeout(function(){
    console.log("hi there") ;

    setTimeout(function(){
        console.log("Inside the second one");
    },3000) ;
},2000);

// Promise is only syntetical thing use to write in a cleaner way 

function mySetTimeout(duration){
    let p= new Promise(function(resolve){
        // After 1 second call resolve
        setTimeout(resolve, 1000) ;
    });
    return p ;
}

mySetTimeout(1000)
   .then(function(){
       console.log("log the first thing") ;
    });

// Return Undefined
function myOwnSetTimeout(callback, duration){
    setTimeout(callback, duration) ;
}    

//  Returning a promise 
function promisifiedMyOwnSetTimeout(duration){
    const p= new Promise(function(resolve){
    }) ;
    return p ;
}

function kiratAsyncFunction(){
    let p= new Promise(function(resolve){
        resolve("hi there  i am nitesh Mourya") ;
    });
    return p ;
}

async function main(){
    const value= await kiratAsyncFunction() ;
    console.log(value) ;
}
main() ;
