//import default function{object destructuring}


//import PI, { x, username as appusername, billing as bill } from './utils.js'
import coding, * as myutil from './utils.js';

// console.log(x);
// console.log(appusername); //(username);
// bill(); //billing();

// console.log(PI);
// //code(); //coding(); //only one default

console.log(myutil.x);
console.log(myutil.username);
myutil.billing();

//console.log(myutil.PI);
coding();

//Summary:
//1. export 1 file to another file
//2. export{a,b,c} -> import{a,b,c} from ./utils.js
//3. export{a,b,c} -> import{a,b} from ./utils.js -> can do object destructuring
//4. only one default function or variable but not part of destructuring
//5. renaming: using as keyword:
// rename variable and function
// export { a,b,c test} -> {a as mya, b as myb
//for default -- no alioce no keyword - use any name
// export {a,b,c,d} -> import * as obj from './utils.js'
//obj.a
//obj.b

// 6. default variables are fixed..
//7. console.log in util by default will get executed.. ao better to avoid 
