//function with default parameter
// 

function calculate(bill, discount=50){
console.log(bill + discount);

}

calculate(1000); //with default parameter //1050
calculate(2000, 100); //2100
calculate(300); //350


function calculatePrice(total, tax=0.5, discount=0){
return total+tax-discount;
}

let finalAmt = calculatePrice(1000); //100
console.log(finalAmt); //1000.5


function billing(discount =10, total){
    console.log(total - discount);
}

billing(100); //naN -> Don't use default parameter before non-default parameter. It will give NaN because total is undefined.

//
function getFinalSalary(ctc, sharePrice, foodCoupon){ //Don leave any unsed parameters..
    let finalSalary = ctc +sharePrice;
    console.log(finalSalary);
}

getFinalSalary(10000,1000);




