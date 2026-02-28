const myObj = {
    c: "C",
    cpp: "c++",
    js: "javascript",
    rb: "ruby"
}

for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`);

}

const lang = ["c", "c++", "js", "ruby"]

for (const key in lang) {

    console.log(lang[key]);


}