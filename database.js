// ===== VELNOX Database =====

const VELNOX={

products:[

{
id:1,
name:"Premium Sweet Box",
price:299,
stock:100
},

{
id:2,
name:"Luxury Chocolate",
price:199,
stock:100
},

{
id:3,
name:"Dry Fruit Box",
price:499,
stock:50
},

{
id:4,
name:"Gift Pack",
price:699,
stock:25
}

],

orders:[],

users:[]

};

if(localStorage.getItem("VELNOX_DATABASE")==null){

localStorage.setItem(

"VELNOX_DATABASE",

JSON.stringify(VELNOX)

);

}

function getDB(){

return JSON.parse(

localStorage.getItem("VELNOX_DATABASE")

);

}

function saveDB(db){

localStorage.setItem(

"VELNOX_DATABASE",

JSON.stringify(db)

);

}
