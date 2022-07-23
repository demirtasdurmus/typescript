function add(n1: number, n2: number) {
    return n1 + n2;
}

let number1: number;
let number2: number;

number1 = 2;
number2 = 9;

const result = add(number1, number2)
//console.log(result)

// dynamic addNumbers function

const addNumbers = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = addNumbers(3, 6.9, 7, 5, 9, 12)
//console.log(addedNumbers)