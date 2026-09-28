//class: Category/Blueprint/template for the objects:
//variables + methods


export class Employee {
    //1. class variables - Global Variables:
    name;
    age;
    salary;
    isActive;

    //2. constructor: it is part of class and it will help us to create the object of the class
    // and help us to initialize the class variables
    //it will be called when we create the object of this class
    //only one const.. is allowed...
    //Can't overload constructor in java script..
    //No return.. No construcot Name...
    // No Application logic


    constructor(name, age, salary, isActive) {
        //this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    //3. Actions: Methods
    //without function keyword for normal methods...

    coding() {
        console.log(this.name + " is coding");
    }
    reading() {
        console.log(this.name + " is Reading");
        this.coding();
    }

    running = function () {
        console.log(this.name + " is running");
    }

    printing = () => {
        console.log(this.name + " is printing");
    }

    async billing() {
        return Promise.resolve(100);
    }

}

//Create the object of the class: using the new keyword:

let e1 = new Employee('Tom', 30, 12000, 'active');
console.log(e1.name, e1.age, e1.salary, e1.isActive);

e1.coding();
e1.reading();
e1.running();
await e1.billing();

console.log("================");

let e2 = new Employee('Raj', 35, 12000, 'Inactive');
console.log(e2.name, e2.age, e2.salary, e2.isActive);

e2.coding();
e2.reading();
e2.running();
await e2.billing();

console.log("================");

let e3 = new Employee('Beam', 35);
console.log(e3.name, e3.age, e3.salary, e3.isActive);

e3.coding();
e3.reading();
e3.running();
await e3.billing();

e3.salary = 50.33;
e3.isActive = true;

console.log(e3.name, e3.age, e3.salary, e3.isActive);

console.log("================");

//Object with no reference: willl be eligible for GC

new Employee('Beam', 35);


//Object with undefined/null refence: willl be eligible for GC
let e4 = new Employee('Beam', 35);
e4 =undefined;
e4.billing();