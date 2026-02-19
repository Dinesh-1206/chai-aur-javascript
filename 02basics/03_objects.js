//singleton 
//object.create


//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "john",
    age: 18,
    location: "jaipur",
    "email": "dinesh@google.com",
    [mySym]: "mykey1",
    isLoggin: true,
    lastLogin: ["monday", "sunday"]
}

console.log(jsUser["email"])
console.log(jsUser[mySym])

// console.log(jsUser["email"]);
jsUser.email = "dinesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "dinesh@microsoft.com"
console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello js user");
}
jsUser.greetingTwo = function () {
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


