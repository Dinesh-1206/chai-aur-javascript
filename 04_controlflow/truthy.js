const userEmail = ""
if (userEmail) {
    console.log("got user Email");

} else {
    console.log("donot have user email");

}

// falsy value = 0 , -0 , null , undefined , Bigint , "" , null

// truthy value = "0",'false'," ",{},[], function(){}


/*
Nullish coalesing operator (??) null undefinded

let val1
val1=5??10
console.log(val1);
*/

//terniary operator
// condition ? true : false

const tea = 10;
tea <= 10 ? console.log("tea is reasonable price") : console.log("tea price is high");
;
