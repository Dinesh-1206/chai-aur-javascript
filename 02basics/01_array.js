//array
const myArray=[0,1,2,3,4,5]
const myHeroes=["batman","superman","powerranger","nagraj"]
// console.log(myArray[1]);
// console.log(myHeroes[3]);

// Array methods

myArray.push(6)
myArray.push(7)
myArray.pop()
myArray.unshift(9)
myArray.shift()
myArray.includes(8)
// console.log(myArray.includes(8));
// console.log(myArray.indexOf(4));
const newArray=myArray.join()
// console.log( newArray);
// console.log( myArray);

//slice & splice
console.log("A",myArray);
const myn1=myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);

const myn2=myArray.splice(1,3);
console.log("C",myArray);
console.log(myn2);
console.log("hi");