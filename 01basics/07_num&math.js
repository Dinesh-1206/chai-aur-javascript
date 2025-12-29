const score=300
console.log(score)

const balance=new Number(100)
console.log(balance)
// console.log(balance.toString().length);
console.log(balance.toFixed(2))

const othernum=203.8954
console.log(othernum.toPrecision(3))
const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++MATHS+++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//- sign will change into +

console.log(Math.round(40.7));//convert no. in ropund off
console.log(Math.ceil(4.1));//it will choose larger no.
console.log(Math.floor(4.1));//it will choose smaller no.
console.log(Math.min(2,5,4,9,6));//it will find smallest no.
console.log(Math.max(2,5,4,9,6));//it will choose maximum no.

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);