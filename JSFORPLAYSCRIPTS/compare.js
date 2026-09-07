//== vs ===
//== checks for loose/soft equality of values, but not type
//=== checks for strict/hard equality of values and type

console.log(1 == '1'); // true
console.log(1 === '1'); // false

console.log(10 == "10"); //true
console.log(10 === "10"); //false

console.log(10.00 === 10); //true
console.log("10.00" === 10); //false

// In JavaScript,
//true = 1
//false = 0

console.log(true == 1); //true

console.log(true === 1); //false

console.log(+"42" == 42); //tru

console.log(null == undefined); //true both reoresenting 

console.log(null === undefined); //false

console.log("" === "");

console.log("" == "");

console.log(-"42" * -1 === 42);





