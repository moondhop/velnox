function placeOrder(order){

let db=getDB();

db.orders.push(order);

saveDB(db);

alert("Order Placed Successfully");
}
