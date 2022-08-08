function facMulti(number) {
    let multiply = 1;
    for (startNum = 1; startNum < number; startNum++) {
        let secNum = startNum + 1;
        multiply = multiply * secNum;
    }
    return multiply;

}

const theNumber = facMulti(20);
console.log(theNumber);