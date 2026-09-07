//1.simple function
//no return, no input







//2. no return, some input:
function search(username){
    console.log('search is satrted....');
    console.log(username, 'is found...');
}

//call the function:
//search('Naveen');//calling a function by passing a value/argument
//search(100);
//search(true);

search('Devi');
search(100);

//return type: void
/**
 * @clickElement
 */
function clickElement(element){

}


//3. some input, some return

function add(num1,num2){ //can't define datatype here?
let sum = num1+num2;
return sum;
}

add(10,20);


//4. function with object

function userDataInfo(String userName){
    let userInfo = null;
    if(userName=="Pritha"){
        Name: "Pritha",
        id: 36236,
        dept: "science"
    };

    }
}