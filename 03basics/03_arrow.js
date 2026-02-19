const user = {
    username: "dinesh",
    price: 999,

    welcomeMessage:function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);// this means current context

    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "dinesh"
//     console.log(this.username);
// }
// chai()

//*********arrow function********** */

const chai = () => {
    let username = "dinesh"
    console.log(this);

}
//chai()

// const add = (num1, num2) => {
//     return num1 + num2
// }

//const add=(num1,num2)=> num1+num2
//const add = (num1, num2) => (num1 + num2) //emplicit return 
const add = (num1, num2) => ({ username: "dinesh" })
console.log(add(3, 4));