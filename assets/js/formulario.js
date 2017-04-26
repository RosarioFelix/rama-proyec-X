window.onload =function(){
    var element = document.querySelector(".formulario");
    element.addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm();
    })
};

function validateForm(){
var name       = document.getElementById("name").value;
 var name_issue = document.getElementById("name_issue").classList.add("tooltip");

 if(name != ""){
   if(!name.match(/[A-Z]{1,}[a-z]+/)){
     mostrarTooltip('name_issue');
     mostrar("name_issue","Se Permite solo letras \n Primera letra en Mayúscula");
   }
   }else{
   mostrarTooltip('name_issue');
   mostrar("name_issue","No debe haber recuadros en blanco*");
 }
 };

 function mostrarTooltip(elem){
	document.getElementById(elem).classList.remove("tooltip");
	document.getElementById(elem).classList.add("tooltiptext");
}
function mostrar(element,message) {
  var x = document.getElementById(element);
  x.innerHTML = "";
  x.innerHTML = message;
}
