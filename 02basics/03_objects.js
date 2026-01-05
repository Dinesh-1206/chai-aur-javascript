//singleton 
//object.create


//object literals
const mySym=Symbol("key1")

const jsUser={
    name:"john",
    age:18,
    location:"jaipur",
    "email":"dinesh@google.com",
    [mySym]:"mykey1",
    isLoggin:true,
    lastLogin:["monsday","sunday"]
}

console.log(jsUser["email"])
console.log(typeof jsUser[mySym])

// console.log(jsUser["email"]);


