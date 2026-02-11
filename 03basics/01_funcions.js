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

/************************************************** */

function loginUserMessage(username="sam"){
    if(!username){
        return "Please enter username"
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage());

/*************************************************/

function calculateCartPrice(...prices){ //rest operator
    return prices;
}
console.log(calculateCartPrice(20,30,40,50));

//*************************************************/

const user={
    Item:"Shirt",
    price:999
}

function handleObject(anyObject){
    console.log(`Item is ${anyObject.Item} and price is ${anyObject.price}`);
}
handleObject(user);

//**************************************

const myNewArray=[1,2,3,4,5];
function returnSecondValue(array){
    return array[0];
}
console.log(returnSecondValue(myNewArray));