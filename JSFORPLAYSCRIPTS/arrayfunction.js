//Array functions:

//[] - dynamic arrays
//li=0; arr.length, hi = length-1


//1.Push : add the element to the end of the array. 
let num = [1, 2, 3 ,4, 5];
console.log(num.length);
console.log(num);
let t1= num.push(100);
console.log(t1);
console.log(num.length);
console.log(num);


//2. Pop: Remove the last element and returns the same.
let mynum = [1, 2, 3 ,4, 5];
console.log(mynum.length);
console.log(mynum);
let t1= mynum.pop();
console.log(t1);
console.log(mynum.length);
console.log(mynum);


//3. unshift: add beginning of Array
let newNum = [1,2,3,4,500,600];
let r1 = newNum.unshift(100);
console.log(r1);
console.log(newNum);

//4. shift: remove the 1st element and returns the same
let pop = [1,2,3,4,500,600];
let k = pop.shift();//1
console.log(k);//1
console.log(pop);  

//5. splice: add,remove, replace

//splice(startindex,deletecount,replace)
let cart = ['imac', 'samsung','iphone','macbook'];
console.log(cart);    
let deleteItem = cart.splice(2,2,'canon');
console.log(cart);
console.log(deleteItem);

let cart = ['imac', 'samsung','iphone','macbook'];
cart.splice(2,0,'canon');
console.log(cart);

let cart = ['imac', 'samsung','iphone','macbook'];
cart.splice(2,2);
console.log(cart);

let cart = ['imac', 'samsung','iphone','macbook'];
console.log(cart.length);
let deletedItems = cart.splice(0,3,'mac3');
console.log(deletedItems);
console.log(cart);


//6. Slice Method

let cart = ['imac', 'samsung','iphone','macbook'];
let newCart = cart.slice(0,2); //0 to 2
console.log(cart);
console.log(newCart);

let cart = ['imac', 'samsung','iphone','macbook'];
let newCart =cart.slice(2); //first 2 elements
console.log(newCart);
console.log(cart);
//
let cart = ['imac', 'samsung', 'iphone', 'macbook']

//let newCart = cart.slice(0,2);

let newCart =cart.slice(-3); //last 3 elements
console.log(newCart);
console.log(cart);

let cart = ['imac', 'samsung', 'iphone', 'macbook']
let newCart =cart.slice(-3,-1); //last 3 elements
console.log(newCart);
console.log(cart);

//7. reverse:
let cart = ['imac', 'samsung', 'iphone', 'macbook'];
cart.reverse();
console.log(cart);


//8.Index
let cart = ['imac', 'samsung', 'iphone', 'imac' , 'macbook', 'imac']
let i1 = cart.indexOf('imac');//1st occurence
console.log(i1);


let i2 = cart.indexOf('imac',i1+1);//2nd occurence
console.log(i2);

let i3 = cart.indexOf('imac',i2+1);//2nd occurence
console.log(i3);

//9. includes

let products =  ['imac', 'samsung', 'iphone', 'macbook'];
console.log(products.includes('samsung'));

//10. join

let products =  ['imac', 'samsung', 'iphone', 'macbook'];
console.log(products.join('|'));//, for csv.. can be added any characters or string..

//11. toString
let lg = products.toString();
console.log(lg);

//12. at:
let products =  ['imac', 'samsung', 'iphone', 'macbook'];
console.log(products.at(0));
console.log(products.at(1));
console.log(products.at(-4));
console.log(products.at(-2));

console.log(products[3]);
console.log(products[-1]);

//13. forEach function
let products =  ['imac', 'samsung', 'iphone', 'macbook', 'monitor', 'keyboard'];

products.forEach((e)=> console.log(e))

products.forEach((e)=> console.log(e+'I'))

products.forEach((e)=> console.log(e.toUpperCase(), e.length))

let num = [100,200,300,400,500]

num.forEach((e)=>console.log(e+e));



//map
//filter
//reduce