let wishlist=[];

function addWishlist(product){

wishlist.push(product);

localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);

alert("Saved ❤️");

}
