const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener("click", function (clr) {
        console.log(clr.target);
        if (clr.target == Red) {
            body.style.backgroundColor = "Red";
        } if (clr.target == Blue) {
            body.style.backgroundColor = "Blue";
        } if (clr.target == Black) {
            body.style.backgroundColor = "Black";
        } if (clr.target == Orange) {
            body.style.backgroundColor = "Orange";
        }
    })
});