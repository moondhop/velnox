function showNotification(title,message){

if(!("Notification" in window)) return;

if(Notification.permission==="granted"){

new Notification(title,{

body:message,

icon:"logo.png"

});

}else{

Notification.requestPermission();

}

}
