function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("N");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

addTwoNumbers(3,4);

function loginUserMessage(username="sam"){
    if(!username){
        return "Please enter username"
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage());