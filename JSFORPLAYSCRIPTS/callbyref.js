//call by value

function test(num){ 
    console.log(num+10);
}

test(100); ////calling function by passing value/arg

//call by ref:

let user = {
    name: 'giri',
    age: 30,
    salary: 30.22,
    city: 'Bangalore'
}

function getUserDetails(userobj){
    console.log(userobj.name, userobj.age, userobj.salary);
}

//calling by reference //
getUserDetails(user);


//calling function by passing object body

function getUserDetails01(userobj){
    console.log(userobj.title, userobj.url);
}

getUserDetails01({
    title: 'loginPage',
    url: 'https://www.abc.com'
});