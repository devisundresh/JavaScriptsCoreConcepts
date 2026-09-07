//Function chain: a function is calling another function

function login(){
    console.log('login app');
    search();
}

function search(){
    console.log('search is done');
    addToCart();
}

function addToCart(){
    console.log('search is done');
   logout();
}

function logout(){
    console.log('log out');
}

login();