function startMachine(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("1.Machine Started");
            resolve();
        },2000);
    })
}

function boilWater(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("2.Water Boiled");
            resolve();
        },2000);
    })
}

function AddCofee(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("3.Cofee Powder Added");
            resolve();
        },2000);
    })
}

function AddSugar(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("4.Sugar Added");
            resolve();
        },2000);
    })
}

function serverCofee(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("5.Serve coffee");
            resolve();
        },2000);
    })
}

function end(){
          // setTimeout(() => {
             let flag=true;
                if(flag){
                console.log("result");
            return Promise.resolve(100);}
                else{
                    console.log("error");
            return Promise.reject(99);
                }
              //  },2000);
       }


startMachine()
.then(()=> boilWater())
.then(()=> AddCofee())
.then(()=> AddSugar())
.then(()=> serverCofee())
.then(()=> console.log("Cofee ready!"))
.finally(()=> console.log('shutdown cofee machine'));


//

end()
.then((num)=>console.log(num))
.catch((num)=>console.log(num))
.finally(()=>console.log("End!"));


