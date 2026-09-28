let emp = {
    name: 'shubhi',
    age: 40,
    salary: 55.5,
    coding() {
        console.log(this.name);
    },
    testing() {
        console.log(this.name, 'is testing app');
        this.coding();
    },
    printData(x, y) {
        return x + y;
    },
    data: function () {
        console.log('hello', this.name);
    },
    datafun: ()=>{
        console.log('print',emp.name); //undefined so use emp.name
    }
}

console.log(emp.name);
emp.coding();
emp.testing();
let r1 = emp.printData(10, 20);
console.log(r1);
emp.data();
emp.datafun();



//Login Page Features:
let loginPage = {
    username: '#username',
    password: '#password',
    loginBtn: '//button[@id="login"]',

    doLogin(appusername, appassword){
        console.log(appassword);
        console.log(appusername);
        console.log('click login button');
    },
    forgotPwd(){

    },
    getFooters(){

    }

}
//loginPage.doLogin('admin','admin123');

function getloginpage(pageObject){
   // console.log(pageObject);
    pageObject.doLogin('admin','admin123');
}

getloginpage(loginPage);


//object with arrow function by passing and printing parameters

let acct={
    name: 'Tom',
    writing(){
        console.log("Name: ${this.name}");
    },
    param: (age)=>{
        console.log("Age is ${age} .");
    }
}

acct.writing();
acct.param(35);
