const dog ={
    name: "doggie",
    legCount:2 ,
    sepak: "bhiw bhow"
}
const cat={
    name: "cat",
    legCount:2 ,
    sepak: "meow meow"
}

console.log("animal"+ cat["name"]+" "+cat["sepak"]);

function printtr(animal){
    console.log("animal"+ " "+animal["name"]+" "+ animal["sepak"]);
}
printtr(dog);
printtr(cat);

class Animals{
    constructor(name, legcount, speaks){
        this.name= name ;
        this.legcount= legcount ;
        this.speaks= speaks ;
    }
}

let dogs= new Animals("dog", 4, "bhow bhow");