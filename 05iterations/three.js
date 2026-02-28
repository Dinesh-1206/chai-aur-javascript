// for of

// [{},{},{}]

// ["","",""]

const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    console.log(val);
}

//maps
const map = new Map()
map.set("in", "india") //remove duplicacy
map.set("fr", "france")
map.set("au", "autralia")
map.set("in", "india")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);

}

const myObj = {
    "game1": "freefire",
    "game2": "pubg"
}

for (const [key, value] of myObj) {  //it is not iteratable
    // console.log(key, ':-', value);

}