//function hoisting

create();

function create(){
    console.log("hoisting");
}

//it's allowed not for function expressions

//create(); not allowed
let create = function createlongfunctionName(){
    console.log("hoisting");
}

create();