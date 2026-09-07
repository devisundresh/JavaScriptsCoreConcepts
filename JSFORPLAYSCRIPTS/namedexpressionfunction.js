//Named expression function


function test(name){
    console.log(name);
}

test('pooja');

//getData is expression name
let getData = function getUserDetailsFromDashboard(username){
    console.log('getting user details for: ', username);
    return 100;
}

let data = getData('Surbhi');
console.log(data);

//getUserDetailsFromDashboard('devi'); ->can't cal when assign with expressions
//Advantage here is lengthy function name assign short name in expressions
let click = function lengthy_Function_Name_using_here(){
    console.log('click the element');
}