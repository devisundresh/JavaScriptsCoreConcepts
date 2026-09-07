let x=100;
y=200;
a='selenium';
b='playwright';
console.log(x+y);
console.log(a+b);
console.log(a+b+x+y);
console.log(x+y+a+b);
console.log(a+b+x+y+a+b);
console.log(x+y+a+b+(x+y)+a+b); 
console.log(x+y+a+b+(x+y)+a+b+(x+y)+a+b);
console.log(100n+'devi');

console.log(1+'1');
console.log('1'+'1'); //concatenation

console.log(1-'1');//subtraction
console.log(5-'2');//subtraction

console.log('hello'-2);//NaN

console.log(100+'1'-'1');

console.log(10/"2");

console.log(2**3); //exponentiation

//Unary operator

//1. unary operators:

console.log(+"100"+10); //positive

let salary="1000";
console.log(+salary+500); //positive

console.log(-salary +500); //negative

console.log(-"1000"-500); //negative

console.log(-1000 -"500"); //negative  

console.log("1000n" + 500n); //concatenation

console.log("1000n" + 500n); //concatenation

console.log(+1000n + 500); //Cannot convert a BigInt value to a number

console.log(+"1000n"); //NaN

 console.log(100 +'1' - 1); //100
 
 console.log(10n +'1' - '1'); //100

  console.log(10n +1 - '1'); //error