const message = document.querySelectorAll(".message");
let noleido = document.querySelectorAll(".no__leido");
let notificationNum = document.getElementById("notification_id");
const filtro = document.getElementById("filter_read");
const messageText = document.querySelector("message__text");


notificationNum.innerHTML = noleido.length;
let cantidad = noleido.length -1;

filtro.addEventListener('click', function(){
  noleido.forEach((e)=>{
    e.classList.remove("no__leido");
  });
  notificationNum.innerHTML = 0;
});


const mensajeSinLeer = function (event) {
  event.currentTarget.classList.remove("no__leido");
  event.currentTarget.removeEventListener("click", mensajeSinLeer, true);
  notificationNum.innerHTML = cantidad --;
}

message.forEach((el) => {
  if (el.classList.contains("no__leido")) {
    el.addEventListener("click", mensajeSinLeer, true);  
      
  };
});


 
