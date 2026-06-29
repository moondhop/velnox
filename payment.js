function makePayment(method,amount){

const payment={

method:method,

amount:amount,

status:"Pending",

date:new Date().toLocaleString()

};

localStorage.setItem(

"VELNOX_PAYMENT",

JSON.stringify(payment)

);

alert("Payment Method : "+method);

}
