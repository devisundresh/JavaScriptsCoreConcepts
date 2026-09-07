//nested objects: object inside object

let user1 = {
    name: "Devi",
    age: 35,
    phone: '73498755423532',

    address: {
        flat: 101,
        building: 'new apartment',
        city: 'bangalore'
    }
};

// console.log(user1);
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.phone);
// console.log(user1.address);
// console.log(user1.address.city);
// console.log(user1['address']['city']);


for (let ele in user1) {
    //console.log(ele +': ' + user1[ele]);
    if (ele === 'address') {
        for (let e in user1[ele]) {
            console.log(user1[ele][e]);
        }
    }
    else {
        //console.log(ele +': ' + user1[ele]);
        console.log(user1[ele]);
    }
}


let cus = {
    name: "Devi",
    age: 35,
    phone: '73498755423532',

    address: {
        flat: 101,
        building: 'new apartment',
        city: 'bangalore'
    },
    device: ['apple', 'mouse', 'keyboard']
};

console.log(cus.device.length);

for(let ele in cus['device']){
    console.log(cus['device'][ele]);
}