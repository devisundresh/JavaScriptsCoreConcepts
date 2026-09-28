//callback hell../pyramid of doom:
//coffee Machine:

//1. start the machine --2sec
//2. boilWater -- 3 secs
//3. addcofee powder - 4 secs
//4. pour in the cup - 2 secs
//5. cofee is ready --1 sec


function startMachine(callback){
setTimeout(()=>{
    console.log('1.Machine started');
    callback();
},3000);
};

function boilWater(callback){
setTimeout(()=>{
    console.log('2.Water boiled');
    callback();
},4000);
};

function addMilk(callback){
    console.log("2a.Milk Added");
    callback();
}

function addCofeePowder(callback){
setTimeout(()=>{
    console.log('3.Add cofee powder');
    callback();
},3000);
};

function pourInCup(callback){
setTimeout(()=>{
    console.log('4. Pour In Cup');
    callback();
},2000);
};

function serveCofee(callback){
setTimeout(()=>{
    console.log('5.Serve Cofee');
    callback();
},1000);
};


//callback hell / pyramid of doom
startMachine(() => {
    boilWater(()=>{
        addMilk(()=>{
          addCofeePowder(()=>{
            pourInCup(()=>{
                serveCofee(()=>{
                    console.log('Your cofee is ready');
                })
            })
        })
    })              
 })
});

//Drawback:
//1. difficult to debug
//2. return is difficult
//3.