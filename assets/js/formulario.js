window.onload=function(){
  document.getElementById("formulario").onsubmit=function(e){
		e.preventDefault();
	}
function Datos(nombre,apellido,correo,domicilio,celular){
  this.name=nombre;
  this.lastName=apellido;
  this.email=correo;
  this.address=domicilio;
  this.phone=celular
};

arrDatitos = [];


 document.getElementById('boton').addEventListener("click",function () {

    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone=document.getElementById("phone").value;

        if(name.length==0 && lastName.length==0 && email.length==0 && address.length==0 && phone.length==0) {
          var incompleto = document.getElementById("incompleto");
          incompleto.innerText = "Todos los campos son obligatorios"
         }else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(email)) {
          var here = document.getElementById("here");
          here.innerText = "Escriba correo : xxxx@xxxx.com"
        }else if(address.length <= 2){
          var aqui = document.getElementById("aqui");
          aqui.innerText = "Complete direccion";
        }else if(phone.length >9){
          var numero = document.getElementById("numero");
          numero.innerText = "Solo puede ser 9 digitos";
        }else{
          console.log(new Datos(name, lastName, email,address,phone));
          localStorage.setItem("nuevoDate",JSON.stringify(new Datos(name, lastName, email,address,phone)));
          document.getElementById("formulario").reset()
           window.location ="gracias.html"
        }
  });


  function creaDiv(datito){
  var contenedor = document.getElementById("div-contenedor");
  contenedor.innerHTML="";
  for(var i = 0; i < datito.length; i++){
    var contenedorDatos = document.createElement("div");
    contenedorDatos.classList.add("informacion");
    for (var prop in datito[i]) {
      var dato = document.createElement("p");
      dato.innerHTML= prop + " : " + datito[i][prop];
      contenedorDatos.appendChild(dato);
    }
    contenedor.appendChild(contenedorDatos);
  }
}

var names = document.getElementById("name");
var lastNames = document.getElementById("lastName");

var letras = function(e){
  var codigo = e.keyCode;
  if((codigo>=97 && codigo<=122) || (codigo>=65 && codigo<=90)|| codigo==39 || codigo == 32){
			this.nextElementSibling.nextElementSibling.innerText = "";
			return true;
    }else{
      this.nextElementSibling.nextElementSibling.innerText = "Este campo permite letras"
    return false;
  }
};

names.onkeypress=letras;
lastNames.onkeypress=letras;
};

var datos=document.getElementsByClassName('datos');

datos[0].style.position="absolute";
datos[0].style.left="230px";
datos[0].style.display="inline-block";
datos[0].style.width="500px";
datos[0].style.top="190px";
datos[1].style.position="absolute";
datos[1].style.left="550px";
datos[1].style.width="500px";
datos[1].style.top="190px";
datos[2].style.position="absolute";
datos[2].style.left="860px";
datos[2].style.width="500px";
datos[2].style.display="inline-block";
datos[2].style.top="190px";
datos[3].style.position="absolute";
datos[3].style.left="230px";
datos[3].style.width="500px";
datos[3].style.top="290px";
datos[4].style.position="absolute";
datos[4].style.left="550px";
datos[4].style.width="500px";
datos[4].style.top="290px";


var span=document.getElementsByClassName('span');
span[0].style.color="red";
span[0].style.display="block";
span[1].style.color="red";
span[1].style.display="block";
span[3].style.color="red";
span[3].style.display="block";
