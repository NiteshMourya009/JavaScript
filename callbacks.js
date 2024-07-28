// passing a Function as an Argument in Other Funnction is called Callback.
function square(n){
    return n*n ;
}
function cube(n){
    return n*n*n ;
}

function quad(){
    n*n*n*n ;
}
function sumOfSomething(a,b,fn){
    let val1= fn(a) ;
    let val2= fn(b) ;

    return val1+val2 ;
}
// Functional Arguments  
let ans= sumOfSomething(4,3, cube) ;
console.log(ans);