

let x = 10;
let username = 'naveen';

console.log('welcome !!');

function billing() {
    console.log('billing');
}

//can have only one default property(either function or variable) in single file
//default not participate in destructuring

// const PI = 3.14;
// export default PI;

export default function coding() {
    console.log('hello coding');
}

export { x, username, billing }