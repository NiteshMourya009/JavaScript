 // Object 
 const user1 = {
      firstName: "Nitesh" ,
      gender:" Male"
 }
 console.log(user1.firstName)
 console.log(user1.gender);

const allUsers = [{
       firstName: "Nitesh" ,
      gender:" Male"
 },{
     firstName: "Akkshit" ,
      gender:" Male"
 },{
     firstName: "Deepak" ,
      gender:" Female"
}] ;

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"]=="male"){
       
        console.log(allUsers[i]["firstName"]) ;
    }
}

function sum(a,b){
     return  a+b ;
}
 
const value= sum(2,4);
const value1= sum(6,8);
 console.log(value);
let sum1=0 ;
 for(let i=0; i<100; i++){
    sum1 +=i ;
 }
 console.log(sum1);