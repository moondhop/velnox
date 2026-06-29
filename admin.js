function totalProducts(){

let db=getDB();

return db.products.length;

}

function totalOrders(){

let db=getDB();

return db.orders.length;

}

function addProduct(name,price){

let db=getDB();

db.products.push({

id:Date.now(),

name:name,

price:price,

stock:100

});

saveDB(db);

alert("Product Added");

}

function deleteProduct(id){

let db=getDB();

db.products=db.products.filter(

p=>p.id!=id

);

saveDB(db);

alert("Deleted");

}
