//Normal function

function test(){
console.log("Test Print")
}
test();

//anonymous function: A function has not name....
//no name:
//but expression name required: print

let print= function(){
    console.log('Hello');
}

calling by expression name:
print();

//------------------------------

//add two numbers:

/**
 * @param{number} a
 * @param{number} b
 * @returns 
 */
let add = function(a,b){
    return a+b;
}

let res = add(3,5);
console.log(res);

/**
 * @param{string} browserName
 * * @returns 
 */
let launchBrowser = function(browserName){
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

let flag = launchBrowser('chrome');
console.log(flag);

//Modern version of anonymous function: arrow function: =>