let username=localStorage.getItem("username");

if(username){

document.body.insertAdjacentHTML(

"afterbegin",

"<h3 style='position:fixed;right:20px;top:20px;color:gold;'>Welcome "+username+"</h3>"

);

}
