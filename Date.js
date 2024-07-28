const currentDate= new Date() ;

console.log(currentDate.getDate());
console.log(currentDate.getMonth() +1);
console.log(currentDate.getFullYear()) ;

console.log(currentDate.getHours()) ;
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

function currentTimePrint(){
    console.log(new Date().getTime()) ;
}
// setInterval(currentTimePrint,1000);


