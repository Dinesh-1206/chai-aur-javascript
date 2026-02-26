//Immediately Invoked Function Expression (IIFE)
//global scope k pollution ko htane k liye iife use kiya

(function chai() {
    console.log('DB CONNECTED');

})();

((name) => {
    console.log(`DB CONNECTED2 ${name}`)
})('dinesh');
