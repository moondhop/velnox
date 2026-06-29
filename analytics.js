let views=localStorage.getItem("views");

views=views?parseInt(views)+1:1;

localStorage.setItem("views",views);

console.log("Website Views :",views);
