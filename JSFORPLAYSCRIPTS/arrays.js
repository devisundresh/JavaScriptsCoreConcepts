let i = [10,20,30,40,50]; //Arrays are Dynamic in JS

console.log(i);
console.log(i.length);
console.log(i[3]);
console.log(typeof i);

i=65;
console.log(i);
console.log(i.length);
console.log(i[3]);
console.log(typeof i);


i = [10,20,30,40,50]; //homogenius

i[10] = 10;
console.log(i);

i[7] = 70;
i[5]=500
console.log(i);


let products=['mac', 'samsung', 'vivo', 'lg'];

for(let i=0; i<=products.length-1;i++){
    console.log(products[i]);
}

//for of loop
for(let ele of products){ 
    console.log(ele);
    if(ele === true){
        console.log(ele);
    }
}

//for in loop -> to iterate the index

for(let elein in products){
    console.log(elein, products[elein]);
    //console.log();
}

//Interview question:

//Use for of loop to reverse this array..

let product=['mac', 'samsung', 'vivo', 'lg'];
let count=product.length-1;

for(let element of product){
    element=count;
    console.log(product[element]);
    count--;
}

// Use for in loop now

let number=[1,2,3,4,5];
let count=number.length-1;

for(let e in number){
    e=count;
    console.log(number[e]);
    count--;
}


//Negative Index

let num=[1,2,3,4,5];

num[-1]=10;
num[-10]="devi";
num["str"]="js";

num[null]="null";

num[null]=null; //property of the array it'll store..  

console.log(num);

console.log(typeof num);

console.log(num.length); //how many values are there.. LowerIndex or HigherIndex

console.log(Object.getOwnPropertyNames(num));//how array structured internally