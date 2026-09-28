
//callback -- call this function later...
//passing a function as a parameter to another function

function testing(callback) {
    console.log("I'm gonna do callback");
    callback(); //callback variable name same in parameter and calling function also -> JS decide run time either it's function or parameter
}

function print() {
    console.log("Print!!")
}

//1, calling testing fn by passing function name
testing(print);

//2. calling testing function by passing the anonymous function.
//function(){ console.log('hi'); }
testing(function () {
    console.log('hi');
})

//3. calling testing  function by passing anonymous function expression name.
//anonymous function
//name: no name
//expression name: add

let add = function () {
    console.log('add something');
}

testing(add);

//4. calling testing  function by passing arrow function

testing((a, b) => console.log("arrowfunction callback!"));

//5. calling testing  function by passing arrow function with expression name

let arrow = (a, b) => console.log("arrowfunction expression!");
testing(arrow);


//Internal features of a calculator:

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//create: User facing function: generic function: utility function

function calculator(callback, a, b) {
    console.log('calculating something');
    return callback(a, b);
}

let res = calculator(sum, 3, 5); //User knws to cal function calculator to do operation. User don't know how sum calculated. Kind of Abstraction.
console.log(res);

let res1 = calculator(mul, 3, 5);
console.log(res1);

//
function printing(callback, x, y) {
    console.log("Prinitng fucntion");
    callback(x, y);
}

// here callback equal to arrow function(num1,num2)
printing((num1, num2) => {
    console.log(num1 + num2)
}, 10, 20);



//

function finding(callback1, callback2, num) {
    console.log("multiple. callback...")
    callback1(num);
    callback2(num);
}

function coding(num1) {
    console.log('coding with', num1);
}


function writing(num2) {
    console.log('Writing with', num2);
}

finding(coding, writing, 100);

//

function click(element) {
    console.log('click on', element);
}

function performAction(callbackAction, element) {
    console.log("Perform Action..");
    callbackAction(element);
}
performAction(click, "button");

//performAction(click,{Name: "button"});



//

function getUserDetails(callback, userObj) {
    console.log('fetching user details from DB....');
    callback(userObj);
}

//call
getUserDetails((user) => { console.log("hello", user); }, { name: 'mahesh', age: 30 });


//APIs get,post,put,delete
//Internam functions:

function get() {
    console.log("GET API....");
}

function post() {
    console.log("POST API....");
}

function put() {
    console.log("PUT API....");
}

function deleteAPI() {
    console.log("DELETE API....");
}

//User facing function:
function performAPICall(callback) {
    callback();
}

performAPICall(get);
performAPICall(post);
performAPICall(put);
performAPICall(deleteAPI);

//function;
//arrow anonymous function'
//calback
//callback hell
//Promises
//async await
