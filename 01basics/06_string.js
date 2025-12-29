let name="dinesh"
let repoCount=50

console.log(`my name oi ${name} and my recount is ${repoCount}`);//modern syntax

const gameName=new String('dinesh-kandpal')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));
const newGame=gameName.substring(0,4);
console.log(newGame);
const anotherString=gameName.slice(-6,4);
console.log(anotherString);

const newString="     dinesh     "
console.log(newString);
console.log(newString.trim());

const url="https://dinesh%20chandra.com"
console.log(url.replace('%20','-'));
console.log(url.includes('dinesh'));
console.log(gameName.split('-'));