var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);
//console.log(b);
console.log(c);


function one() {
    const userName = "Dinesh"

    function two() {
        const website = "youtube"
        console.log(userName);

    }
    // console.log(website);

    // two()
}
one()

//*********************************************** */

if (true) {
    const username = "Dinesh"
    if (username === "Dinesh") {
        const website = "youtube"
        console.log(username + website);
    }
     console.log(website);

}
console.log(username);

//************** INTERESTING ****************** */

 function addone(num){
    return num+1
 }
 addone(5)

const addtwo = function(num){  
    return num+2
} 
addtwo(5)

