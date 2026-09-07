let user ={
    name: "Robert",
    age: 30,
    salary: 34.55,
    isActive: true
};

user.salary = 45.66;
console.log(user);

delete user.isActive;
console.log(user);

user.email = 'robert@gmail.com';
console.log(email);
console.log(user);
