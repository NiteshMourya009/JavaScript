function getLength(str){
     console.log("Original String:", str) ;
     console.log("Length:", str.length) ;

}
getLength("Hello World" );

function findIndexOf(str, target){
    console.log("Original String:",str) ;
    console.log("Index:", str.indexOf(target)) ;
}
const str= "Nitesh Mourya" ;
const  target= 's' ;
findIndexOf(str, target) ;


function getSlice(str, start, end){
     console.log("Original Sring:", str) ;
     console.log("After Slice:", str.slice(start, end)) ;

}
getSlice("HelloWorldMaiNahi",0,6);
  
function replaceString(str, target, replacement){
    console.log("Original String:",str) ;
    console.log("After replace:", str.replace(target, replacement)) ;
}

replaceString("Vighnesh Nalawade","Nalawade","Mourya") ;

function split(str){
    console.log("Original String:", str) ;
    console.log("After Spiliting:", str.split(" "));
}
split("hi, my name is Nitesh Mourya");

function trimfun(str){
    console.log("Original String:",str) ;
    console.log("After triming String:",str.trim()) ;
}
trimfun("  Harkirat  singh  ");

function stUpper(str){
    console.log("Original String:",str) ;
    console.log("Upper String:", str.toUpperCase()) ;
    console.log(str.toLowerCase());
}
 stUpper("nitesh MoMMY");

 function expainParseInt(value){
    console.log("Original Value:", value);
    let  result= parseInt(value) ;
    console.log("After parseInt:", result) ;
}
expainParseInt("426");
expainParseInt("426psxc");




























































































































































































