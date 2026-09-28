//async-await: Just a syntax top of JS promises to improve the callabck hell and promised chain..
//To avoid pyramid of Doom

//async with function ---> It always return promise
//await with the steps in async function

async function print() {
    console.log('hello print');
}

print();

//Moment add async it gives promise.
async function getNumber() {
    return 100; //Promise witht he number
}

let t1 = getNumber();
console.log(t1); //Promise { 100 }

// getNumber().then((t1) => {console.log(t1)}); //100

//calling async function using await keyword:
// let t1 = await getNumber();
// console.log(t1); //---Error have to debug

//

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'divya', age: 30 });
        }, 3000);
    })
};

//getUser().then((user)=> console.log(user.name,user.age));

let user = await getUser();
console.log(user);
console.log(user.name, user.age);

//
async function getTrainer() {
    return 'naveen';
}

let trainername = await getTrainer();
console.log(trainername);

//
function getSomeError() {
    return Promise.reject("Error");
}

//let err = getSomeError().catch((error) => console.log(error));


let err = await getSomeError();
console.log(err);




//

function startMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1.Machine Started");
            resolve(true);
        }, 2000);
    })
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2.Water Boiled");
            resolve();
            //   reject('Technical Issue');
        }, 2000);
    })
}

function addCofee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3.Cofee Powder Added");
            resolve();
        }, 2000);
    })
}

function addSugar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4.Sugar Added");
            resolve();
        }, 2000);
    })
}

function serveCofee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("5.Serve coffee");
            resolve();
        }, 2000);
    })
}

function displayMessg() {
    console.log("Cofee is ready");
}

//by default coffee functions are async in nature...


//User facing function
//if function has await function call then it should have async.
async function makeCofee() {
    try {
        let flag = await startMachine();
        if (flag) {
            await boilWater();
            await addCofee();
            await addSugar();
            await serveCofee();
            displayMessg();
        }
        else {
            console.log('some error is coming..')
        }
    }
    catch (error) {
        console.log('Close the Machine', error);
    }
    finally {
        console.log('Power off');
    }
}

//calling the makeCoffee() function:
await makeCofee();

//callback hell --> promise chain ---> async await




