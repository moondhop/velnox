function registerUser(name,email){

let db=getDB();

db.users.push({

id:Date.now(),

name:name,

email:email

});

saveDB(db);

}
