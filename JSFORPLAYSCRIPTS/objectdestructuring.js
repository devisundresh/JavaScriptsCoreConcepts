let person = {
    name: 'Ravi',
    age: 34,
    salary:22.33,
    city:'LA',
    ISACTIVE: true
};


let{name, salary} = person;
console.log(name, salary);

let{username, usersalary,city} = person;
console.log(username, usersalary, city);

//reassign the variables: but original variables wont change.

let{name: firstname,salary: mysalary} = person;
console.log(firstname,salary);

//

let person = {
    name: 'Ravi',
    age: 34,
    salary:22.33,
    city:'LA',
    isActive: true
};

LHS : RHS
function getUserDetails({name,age,isActive}){ //whenever want to retrieve partial values of object then destructuring helpful.
console.log(name,age,isActive);
}

getUserDetails(person); //call by ref;

//nested object destructuring;

let customer = {
    username: 'Ravi',
    age: 34,
    salary:22.33,    
    isActive: true,
    address: {
        city:'LA',
        pincode: 101,
        location: {
            lat: 101.11,
            long: 23.44
        }
    }
};

let{ username, age, address: {city, location: {lat} }} = customer;
console.log(username, city, lat);

// let{ username, age, address: {city}, location: {lat} } = customer;
// console.log(username, city,lat);

let student = {
    username: 'Ravi',
    age: 34,
    skills: ['playwiorght', 'selenium']
}

let {username, age,skills:[primaryskill,secondaryskill]} = student;
console.log(username,age,primaryskill,secondaryskill);