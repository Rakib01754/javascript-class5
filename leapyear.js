function checkLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 == 0) {
        return ('The Year' + ' ' + year + ' ' + 'is a leap year');
    }
    else {
        return ('Sorry the year' + ' ' + year + ' ' + 'is not a leap year check another one');
    }
}

let theYear1 = checkLeapYear(1984);
console.log(theYear1);

let theYear2 = checkLeapYear(2022);
console.log(theYear2);