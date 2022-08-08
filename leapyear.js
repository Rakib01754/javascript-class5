function checkLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 == 0) {
        return ('This year is a leap year');
    }
    else {
        return ('This year is not a leap year');
    }
}

let theYear1 = checkLeapYear(1984);
console.log(theYear1);

let theYear2 = checkLeapYear(2022);
console.log(theYear2);