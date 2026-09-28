//Promise: Existing Object in JavaScript. Whenver we create 3 stage
//1. Pending 2. Resolve(fulfillment) 3.Reject(NonFulfillment)

//Resolved: may/maynot return resource/value

//pizza-> pending -> resolved(pizza)
//pizza-> pending -> rejected(reason)

//PW -- click(button)--> resolved(no data)/rejected(reason)

// create a promise using promise

let pizzaPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('pizza');
    }
    else {
        reject('deliver boy not available');
    }
});

//promise object created. name of promise is pizzaPromise.

//calling promise: using ref name:
//promise --> resolved --> then()
//promise --> rejected --> catch()
//finally -->
pizzaPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Bye!')
})

//Promise with wait settimeout:
//1 to n//resolve and reject are called by nodejs automatically when promise name called
function getUserInfo(userId) {
    return new Promise((resolve, reject) => {
        console.log('fetching user data', userId);
        setTimeout(() => {
            if (userId <= 0) {
                reject('invalid userID... 204 No contet');
            }
            else {
                let user = {
                    id: userId,
                    name: 'Sonali',
                    city: 'Pune'
                }
                resolve(user);
            }
        }, 4000);
    });
}

//calling it:
getUserInfo(1).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Close the DB Connection....');
});


//
function getNumber() {
    return Promise.resolve(100);  //another way of creating promise ->only resolve
}

getNumber().then((result) => {
    console.log(result);
})

getNumber().catch((error) => {
    console.log(error);
})
//
function getTrainer() {
    return Promise.resolve('Naveen');
}

getTrainer().then((result) => {
    console.log(result);
});

