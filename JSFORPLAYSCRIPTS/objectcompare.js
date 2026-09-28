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

let customer2 = {
    name: "Devi",
    age: 35,
    phone: '73498755423532',

    address: {
        flat: 101,
        building: 'new apartment',
        city: 'bangalore'
    }
};

console.log(customer1==customer2); //false
console.log(customer1===customer2); //false

console.log(JSON.stringify(customer1)==JSON.stringify(customer2)); //true

console.log(JSON.stringify(customer1)===JSON.stringify(customer2)); //true only false when json values change..
