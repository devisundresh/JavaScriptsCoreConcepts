//static in class

export class Student {

    name; //public
    age; //public

    static trainerName = 'Naveen Automation Labs';

    constructor(name, age, salary) {
        //this.global = local
        this.name = name;
        this.age = age;
    }

    //actions/methods
    coding() {
        console.log(this.name, ' is coding');
    }

    reading() {
        console.log(this.name, ' is reading');
    }

    //static method:
    static learningPlaywright() {
        console.log('learning Playwright');
    }
}

//create the object
let s1 = new Student('Kirti', 30);
console.log(s1.name, s1.age);

s1.coding();
s1.reading();
Student.learningPlaywright();
console.log(Student.age);

