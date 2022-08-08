

function sumOfNumbers(endNumber) {
    sum = 0;
    for (let startNumber = 5; startNumber <= endNumber; startNumber++) {
        sum = sum + startNumber;
    }

    return sum;
}

const theNumber = sumOfNumbers(100);
console.log(theNumber);