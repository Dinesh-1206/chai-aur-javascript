// //primitive datatype
// // 7 types: String , Number , Bollean , Null , Undefined , Symbol , Bigint
const score=100
const valscore=100.5



const isLoggedin=true
const outsideTemp=null
let usermail=undefined;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId)
//  const bigNumber=126541456134651n
//reference(Non-primitive)

// //Array ,Objects ,Functions
const heroes=["batman","spiderman","powerranger"];

let myObj={
    name:"dinesh",
    age:20
}

const myFunction=function(){
    console.log("hello world!")
}

console.log(typeof bigNumber )//bigint
console.log(typeof outsideTemp)//object
console.log(typeof myFunction)//function
console.log(typeof anotherId)//symbol



//++++++++++++++++++++++++++++++++++++++++
//stack(primitive).Heap(non-primitive)
let myYoutubName="dineshchandradotcom"
let anotherName=myYoutubName
anotherName="dineshkandpal"
console.log(anotherName);
// console.log(myYoutubName);

let userOne={
    name:"dinesh",
    upi:"dinesh@ybl"
}
let userTwo=userOne

userTwo.name="dineshkandpal"
console.log(userOne.name);
console.log(userTwo.name);