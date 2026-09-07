let user = {
    name: 'Ravi',
    age: 40,
    salary: 20000
};

console.log(user);
console.log(typeof user);


//JSON - javascript object notation:

//JS Object to json string - SERIALIZATION / MARHSELLING

let userJson = JSON.stringify(user); //convert js value/object to json string
console.log("=================");
console.log("JSON: ", userJson);
console.log(typeof userJson);

//WHERE WE USE IN API
//API Testing
//POST api: API/server understand only JSON so this conversion.
//In API Automation, We will create JS object first then convert into JSON to use as payload for CRUD operations



//JSON string to JS Object -> Deserialization/UnMarshelling
//API --> response (JSON String) --- JS object
let newuser = JSON.parse(userJson);
console.log(newuser);
console.log(typeof newuser);

//API AUTOMATION -> Get call gives me JSON response -> need to convert into JS object
//js object easy to read and use automation for iteration -> user.name, user.age like that, because json is complex, lengthy, can't convert to key value format..


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

let user2 = JSON.stringify(user1,null,4 ); //prettify
console.log(user2);


