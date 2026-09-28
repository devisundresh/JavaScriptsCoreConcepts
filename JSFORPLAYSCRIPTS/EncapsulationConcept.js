//Encapsulation: hinding the current class properties using private variables and giving access via public methods.

export class Employee {

    name; //public
    age; //public
    #salary //private

    constructor(name, age, salary) {
        //this.global = local
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }

    //method:
    setSalary(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

}

let e1 = new Employee('Robert', 30);
e1.setSalary(100);

console.log(e1.name, e1.age, e1.salary, e1.getSalary());

//
class Browser {
    launchBrowser() {
        console.log("launchBrowser.....");
        this.#checkOSCompatible();
        this.#checkRamSize();
        this.#checkUpgrade();
    }

    #checkOSCompatible() {
        console.log("checkOSCompatible....");
    }
    #checkRamSize() {
        console.log("checkRamSize....");
    }
    #checkUpgrade() {
        console.log("checkUpgrade....");
    }
}
