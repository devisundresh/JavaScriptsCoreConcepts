//Arrow function: anonymous function: has no name...
//()=>
//has no function keyword
//use cases: will be used in callbacks.. function as a parameter..

let print = () => console.log('hello world');

//call using expression

print();

//arrow function with 1 param

let pop = (name) => console.log('hello', name);

pop('Automation');

//Anonymous/arrow fn with multiple param with curley braces

let addition = (a, b) => {
    let sum = a + b;
    return sum;
}

let result = addition(3, 5);
console.log(result);


//--------------------

//let mul = (num)=>return num*2; //this is not allowed

//---------------

let mul = (num) => num * 2;

let res = mul(5);
console.log(res);
//---------------

let multi = (num1, num2) => {
    let res = num1 * num2;
    return res;
}
let result = multi(5, 6);
console.log(result);

//---------
let multiply = (num1, num2) => num1 * num2;
let resultmul = multiply(5, 6);
console.log(resultmul);

//
let getTrainer = () => 'naveen';
let name = getTrainer();
console.log(name);

//

let clickElement =(element) => {
    console.log('check the element' ,element,"is visible");
    return true;
}

let flag = clickElement('login Button');
console.log(flag);

//

/**
 * 
 * @param {String} browserName 
 * @returns 
 */
let initDriver = (browserName)=> {
    switch (browserName.trim().toLowerCase()){
        case 'chrome':
            console.log("Launch Chrome");
            return true;
            case 'firefox':
            console.log("Launch firefox");
            return true;
            case 'edge':
            console.log("Launch edge");
            return true;
            default:
                console.log('Invalid Browser:', browserName);
                return false;
    }
}


let isLaunched = initDriver('chrome');
console.log(isLaunched);

//sum,sub,mul,div

let sum = (a,b) => a+b;
let sub = (a,b) => a-b;
let mul = (a,b) => a*b;
let div = (a,b) => a/b;

let t1 = sum(10,20);
console.log(t1);

//

let convertToLowerCase = (name)=>name.toLowerCase();
console.log(convertToLowerCase('DeVi'));

let lowercaseName = convertToLowerCase('DeVI');
console.log(lowercaseName);

// If arrow function has only one param.. then no need to write
//let convertToLowerCase = (name)=>name.toLowerCase();
let convertToLowerCase = name => name.toLowerCase();
console.log(convertToLowerCase('DEVI'));

// If arrow function has zero param.. then u need to write ():
let fun = () => console.log("No parameter function");
fun();

// If arrow function has more than 1 param.. then u need to write ():
let summ = (a,b) => a+b;

//
let user = {
    name: 'giri',
    age: 30,
    salary: 30.22,
    city: 'Bangalore'
};

let getUserDetails = (userObj) => console.log(userObj.name, userObj.age);
getUserDetails(user);


//
let getUserDetail = (userObject) => {
    console.log(userObj.name, userObj.age);
    summ(100,200); //method chaining
};
getUserDetails(user);




