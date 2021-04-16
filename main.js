console.log("hello")

function fiver(number){
    // guard clause
    // check for valid input
    if(!Number.isInteger(number)){

        return null
    }
    let output = null;
    let isEven = number %2 === 0;
    let isMultipleOf5 = number %5 === 0;
    // console.log("in fiver", number);
    // console.log(number%2)

    if( isEven ){
        output = "even";
    }else {
        output = "odd";
    }

    if( isMultipleOf5) {

        output += "fiver";
    }

    return output;
}

console.log(fiver(123) === "odd");
console.log(fiver(10) === "evenfiver");
console.log(fiver(15) === "oddfiver");
console.log(fiver(-2)  === "even");

// edge cases
console.log(fiver("cat") === null);
console.log(fiver(NaN) === null );
console.log(fiver(undefined) === null);
console.log(fiver([]) === null );
console.log(fiver(2.3) === null );


