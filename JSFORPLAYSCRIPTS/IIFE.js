//IIFE - Immediately Invoke Function Expression
//Anonymous function: no name
//Arrow OR Anonymous

(function () {
    console.log("Helloworld...")
})(); //=>CallerPart

() => {(
    console.log('Hello JS....');
})();

(function (name) {
    console.log('Hello ', name);
})('Devi');

((customeNAme) => {
    console.log("hi...", customeNAme)
})('Tom')

    (function (username, age) {
        console.log(username, age);
    })('Arya', 30)

//can I return from IIFE:

let addResult = (function (x, y) {
    return x + y;
})(4, 5)

console.log(addResult);

//Launch Browser

/**
 * @param{String} browserName
 * @returns
 */

let isBrowserLaunched = ((browserName) => {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log("launch chrome");
            return true;
        case 'firefox':
            console.log("launch firefox");
            return true;
        case 'edge':
            console.log("launch edge");
            return true;
        default:
            console.log("Invalid Browser");
            return false;
    }
})('chrome');

if(isBrowserLaunched){
    console.log('Enter the URL');
}
