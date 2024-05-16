function sumCommaSeparatedNumbers(input) {

    if (input.trim() === "") {
        return 0;
    }

    
    const numbersArray = input.split(',');


    const toValidNumber = (value) => {
        const num = parseFloat(value);
        return isNaN(num) ? 0 : num;
    };


    const sum = numbersArray.reduce((acc, val) => acc + toValidNumber(val.trim()), 0);

    return sum;
}

console.log(sumCommaSeparatedNumbers("1,2,3,4,5"));
console.log(sumCommaSeparatedNumbers("10,20,abc,30"));
console.log(sumCommaSeparatedNumbers("0 ,467 ,32 ")); 
console.log(sumCommaSeparatedNumbers("")); 
