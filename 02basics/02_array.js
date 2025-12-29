const marvelHero=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvelHero.push(dc)
// console.log(marvelHero);
// console.log(marvelHero[3][1]);

// const allhero=marvelHero.concat(dc)    //concat
// console.log(allhero);

// const allnewhero=[...marvelHero,...dc]     // spread operator
// console.log(allnewhero);


const anotherArray=[1,2,[3,[4,5],6]]
const realanoarr=anotherArray.flat(Infinity)

console.log(realanoarr);

console.log(Array.isArray("dinesh"));
console.log(Array.from("dinesh"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3));