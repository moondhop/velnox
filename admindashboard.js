function dashboard(){

let db=getDB();

console.log("Products :",db.products.length);

console.log("Orders :",db.orders.length);

console.log("Users :",db.users.length);

}
