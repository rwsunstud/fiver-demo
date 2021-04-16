console.log("hello")

function isMultipleOf( num, modulus){
    // return true if no remainder
    return num % modulus === 0;

}
console.log(isMultipleOf(6, 2) === true);
console.log(isMultipleOf(3,2) === false);
console.log(isMultipleOf(15, 5) === true);
console.log(isMultipleOf(17,5) === false);

function fiver(number){
    // guard clause
    // check for valid input
    if(!Number.isInteger(number)){

        return null
    }
    let output = null;

    // abstracted the algorithm into a function
    let isEven = isMultipleOf(number, 2);
    let isMultipleOf5 = isMultipleOf(number, 2);
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

// Validate an array to confirm it has no empty strings
// If the array has any empty strings, return false ( the array is not valid)
// If the array has no empty strings return true ( the array IS valid)
let strings1 = ["2", "acs", "howdy"]
let strings2 = ["2", "", "acs", "howdy", ""];

function validateArray( strings){

    for( let index = 0; index < strings.length; index++){
        let item = strings[index];
        if(item === ""){
            return false;
        }
    }

    return true;
}
