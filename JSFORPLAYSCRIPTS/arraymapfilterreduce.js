//1. Map: Transform every element of the given array
//returns: new array with smae length

//Usecase: GoTo Each and every element and multiply by two
let num = [1, 2, 3, 4, 5]; //5
let test = num.map((e) => { //e is Parameter of callback function..
    return e * 2;
});

console.log(test);
console.log(num);

let sqrt = num.map((e) => { //e is Parameter of callback function..
    return e * e;
});
console.log(sqrt);

let empList = ['Tom', 'Divya', 'Vinay', 'Robin', 'Naveen'];

let newEmpList = empList.map((e) => {
    return e.toUpperCase();
})
console.log(newEmpList);
console.log(empList);

let newCart = empList.map((e) => { return e = e + '_AutomationLabs' });

console.log(newCart);



//2. Filter: remove from the exisiting array on based on given condition:
//return new array with same length or can be decreased

let numbers = [10, 25, 30, 45, 60];

let grThan30 = numbers.filter(e => e > 30);
console.log(grThan30);
console.log(numbers);

let evennum = numbers.filter((e)=> e%2 == 0)
console.log(evennum);

let oddnum = numbers.filter((e)=> e%2 == 1)
console.log(oddnum);

//
let names = ['Tom', 'Divya', 'Vinay kumar', 'Robin', 'Naveen kumar', 'Om', 'Lee'];
let picklarge = names.filter((e) =>{
    return e.length > 3;
});
console.log(picklarge);

//find the names has surname kumar
let sufName = names.filter((e) => e.includes('kumar'))

console.log(sufName);
console.log(sufName.length);

// Getapple product and replace the iph to phone
let productData = ['apple mac', 'apple iph', 'samsung galaxy', 'apple air'];

//Approach 1:
let filter1 = productData.filter(e => e.includes('apple')); //--> Apple is prefix so don't prefer includes here
let filter2 = filter1.filter(e => e.includes('iph'));
console.log(filter2);

let filter3 = filter2.map(e => e.replace('iph', 'iphone'));
console.log(filter3);

//Approach 2: same with function chaining..
let result = productData.filter(e => e.includes('apple'))
        .filter(e => e.includes('iph'))
        .map(e => e.replace('iph', 'iphone'));

console.log(result);

//Approach 3:
let resultt = productData.filter((e) => e.startsWith('apple'))
              .filter((e) => e.includes('iph'))
              .map((e) => e.replace('iph', 'iphone'));

console.log(resultt);

//3. Reduce: Combine everything into single values

let mynum = [10, 20, 30, 40, 50]

//add all numbers: sum = sum +n

let total = mynum.reduce((sum, n) => sum +n, 0); //0 -> initial value, sum -> holding value 

console.log(total);

////

let productData = ['apple mac', 'apple iph', 'samsung galaxy', 'apple air'];

let result = productData.reduce((result, e) => result+e+' ', 'Robin: ');

console.log(result);

//[100, 20, 30, 45, 60, 70, 80, 89, 21, 34, 55]
//filter1: divisible by 5 : [100, 20, 30, 45, 60, 70, 80, 55]
//filter2: even [100, 20, 30, 60, 70, 80]
//map: [200, 40, 60, 120, 140, 160]
//reduce: 720

let numbers = [100, 20, 30, 45, 60, 70, 80, 89, 21, 34, 55]
let val = numbers.filter((e)=> e%5==0)
        .filter((e)=> e%2 ==0 )
        .map((e)=>e*2)
        .reduce((sum,e)=> sum+e,0);

console.log(val);