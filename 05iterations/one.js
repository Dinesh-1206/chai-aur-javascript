//loops

// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value:${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`innerloop value:${j} and outer loop ${i}`);

        console.log(i + '*' + j + '=' + i * j);
    }
}

// break keyword

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);

}

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is detected");
        continue;

    }
    console.log(i);

}
