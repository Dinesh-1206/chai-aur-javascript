const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, curval) => {
    return acc + curval
},0)

console.log(myTotal);
