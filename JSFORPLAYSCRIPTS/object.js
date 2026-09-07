let user = {
    name: "Devi",
    age: 35,
    isActive: true,
    city: "Bangalore"
} // RHS is Object


console.log(user); 
console.log(user.name); 
console.log(user.country); 
console.log(user.age); 
console.log(user.country); //undefined
console.log(user['name']); 



//for in loop for Object whereas for of loop for Array

console.log("==============");
for (let ele in user) {//ele representing keys
     console.log(ele); //only key
    // console.log(user); //gives full object properties
    console.log(ele, ":", user[ele]);
   // console.log(ele, ":", user.ele); //not recommened it is like above user.country example...
}

//for of loop for Object not Recommended

console.log("==============");
for (let ele of user) {//ele representing keys
     console.log(ele); //only key
    // console.log(user); //gives full object properties
   // console.log(ele, ":", user[ele]);
   // console.log(ele, ":", user.ele); //not recommened it is like above user.country example...
}



let myuser = {
    name: "Devi",
    age: 35,
    isActive: true,
    city: "Bangalore"
}

console.log(myuser);
//myuser=undefined; //afterwards through error..
myuser = null; //object got null reference
console.log(myuser);
myuser.name = "Vikram"; //null.name gives error
console.log(myuser);

{
    name: "sundresh"
}