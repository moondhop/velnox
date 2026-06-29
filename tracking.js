function trackOrder(id){

let db=getDB();

let order=db.orders.find(

o=>o.id==id

);

if(order){

return order.status;

}

return "Order Not Found";

}
