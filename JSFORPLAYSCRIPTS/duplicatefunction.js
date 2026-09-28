//function overloading: multiple function with same name with different parameters


function login(){
    console.log('login to app');
}

function login(username){
    console.log('login to app',username);
}

function login(username, password){
    console.log('login to app',username,password);
}

login(); //calling last function  //o/p: undefined undefined
login(admin,admin123);


function test(){
    console.log('test 1');
}

function test(){
    console.log('test 2');
}

function test(){
    console.log('test 3');
}

test(); // calling last one.. duplicates allowed..