//TC: PERFORMANCE BIG O: O(n) // For Code Optimization

console.log(1); //O(1)
let i =10; //O(1)
console.log(i); //O(1)

let i=0; //1
while(i<=5){ //n
    console.log(i); //n
    i++; //n
}

//1+n+n+n = 3n+1 => 3(n) => o(n) //Linear Equation


for(let n=1; n<=100; n++){
console.log(n);
if(n%5 === 0){
    console.log('Hi Print here!');
    break;
}

if(n%2 ===0 ){
    console.log('Hi Print here!');
    break;
}
}

//1+n+n+n+n =4n+1 = O(n)

    for(let i=0;i<=5;i++){ 
        for(let j=0;j<=5;j++){           
            process.stdout.write(i+''+j+""+k+" ");
           // console.log(j);         
    }
       console.log();
    }

    //(1+n+n+n)(1+n+n+n) = (3n+1)(3n+1) = 9n^2+3n+3n+1 = 9n^2+6n+1 => Quadradic Equation
    //To Simplify Again =>9n^2+6n =>3n(3n+2) => 3n(3n)=9n^2 = O(n^2)
    //Excel file, DB,CSV => O(n^2)

    for(let i=0;i<=5;i++){ 
        for(let j=0;j<=5;j++){
            for(let k=0; k<=5;k++){
            process.stdout.write(i+''+j+""+k+" ");

             process.stdout.write(i+''+j+""+k+" ");
           // console.log(j);         
        }
    }
       console.log();
    }

    //(1+n+n+n)(1+n+n+n)(1+n+n+n) = (3n+1)(3n+1)(3n+1) = O(n^3) => CUBIC Equation

// 3d system



