const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const ans = document.querySelector("#ans")

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please give a valid height"
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please give a valid weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi <= 18.6) {
            ans.innerHTML = `tera bmi ${bmi} hai kuch kha liya kr bhai`
        } else if (bmi > 18.6 && bmi < 24.9) {
            ans.innerHTML = `tera bmi ${bmi} hai normal h bro`
        } else if (bmi >= 18.6) {
            ans.innerHTML = `tera bmi ${bmi} hai mote`
        }
    }
})