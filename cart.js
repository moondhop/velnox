let cart=[];

function addToCart(name,price){

cart.push({

name:name,

price:price

});

localStorage.setItem("velnox_cart",JSON.stringify(cart));

alert(name+" Added To Cart");

}

function loadCart(){

let data=localStorage.getItem("velnox_cart");

if(data){

cart=JSON.parse(data);

}

}

loadCart();
