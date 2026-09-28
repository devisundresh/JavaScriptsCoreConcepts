//settimeout will be having only two parameters

setTimeout(()=>{
//debugger;
console.log('hello world');
},5000); //no need to call settimeout explicitly. nodejs will call..

//
setTimeout(()=>{
    console.log("I'm here");
},3000);
let user = ()=>{
    console.log("I'm user here");
};
user();

//
function getData(callback){
    console.log('get data from the DB');
    setTimeout(()=>
        {
        callback();
        },4000);
}

getData(()=>{
    console.log('user data.....');
});

//

//
function getData(callback,timeout){
    console.log('get data from the DB');
    setTimeout(()=>
        {
        console.log('logic part....');
        callback();
        },timeout);
}

getData(()=>{
    console.log('user data.....');
},5000);

//give me the user information (user object) after 5 sec

function getUserDetails(callback){
    console.log('fetching user data from server db');
    setTimeout(() =>{
        let user ={
            id: 101,
            name: 'Tom',
            email: 'asd@gg.com',
            city: 'LA'
        };
        callback(user);
    },5000);
}

//calling it: 
getUserDetails((user) => {
    console.log('user data received');
    console.log(user);
    console.log(user.name,user.email);
});