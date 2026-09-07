let user1={
    name:"Devi",
    age:35,
    city:'Bangalore'
}

let user2={
    name:"Anu",
    age:25,
    city:'Chennai'
}
let user3={
    name:"Manju",
    age:28,
    city:'Hyderabad'
}

console.log(user1.name, user2.name, user3.name);
console.log(user1.age, user2.age, user3.age);
console.log(user1.city, user2.city, user3.city);

console.log("===========");

user2=user1=user3;

console.log(user1.name, user2.name, user3.name);
console.log(user1.age, user2.age, user3.age);
console.log(user1.city, user2.city, user3.city);

console.log("===========");

user3=user2;

console.log(user1.name, user2.name, user3.name);
console.log(user1.age, user2.age, user3.age);
console.log(user1.city, user2.city, user3.city);