//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){},


// Checking empty object
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

//The Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side operand only when its left-hand side operand 
// is strictly null or undefined

let val1 = 10 ?? 20
let val2 = null ?? 25

console.log(val1);
console.log(val2);

// Terniary Operator
// Condition ? true : false

