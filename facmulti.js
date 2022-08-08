function facMulti(number) {
    let multiply = 1;
    for (startNum = 1; startNum <= number; startNum++) {
        multiply = multiply * startNum;

    }
    return multiply;

}

const theNumber = facMulti(5);
console.log(theNumber);