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

login(); //calling last function 