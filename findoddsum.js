let arr = [5, 7, 8, 10, 45, 30];

function findOddSum(numbers) {
    let oddBox = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];

        if (element % 2 === 1) {
            oddBox.push(element);


        }
    }
    for (let j = 0; j < oddBox.length; j++) {

        const element2 = oddBox[j];
        sum = sum + element2;
    }
    return result = {
        oddarray: oddBox,
        sumofodd: sum

    }

}

let sumOffOdd = findOddSum(arr);
console.log(sumOffOdd);