let user1={
    name: "Devi",
    age: 35,
    phone:'73498755423532'
}

//Createa copy/clone  of the object
//Shallow Copy

let user2={...user1};
console.log(user1);
console.log(user2);


//nested object
let usr1 = {
    name: "Devi",
    age: 35,
    phone: '73498755423532',

    address: {
        flat: 101,
        building: 'new apartment',
        city: 'bangalore'
    }
};
let usr2={...usr1};
console.log(usr1);
console.log(usr2);
console.log("==========");
usr2.age=36;
console.log(usr1);
console.log(usr2);
console.log("==========");
usr2.address.city="chennai"; // all objects get updated now with this values..
console.log(usr1);
console.log(usr2);

//deep copy:
//Modern Cloning: Using

//nested object
let customer1 = {
    name: "Devi",
    age: 35,
    phone: '73498755423532',

    address: {
        flat: 101,
        building: 'new apartment',
        city: 'bangalore'
    }
};

let customer2 = structuredClone(customer1);
console.log(customer1);
console.log(customer2);

customer2.name = 'Anu';
customer2.address.city='Pune';
console.log(customer1);
console.log(customer2);
