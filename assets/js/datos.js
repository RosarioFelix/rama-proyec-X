window.addEventListener('load', function(){
	var arrayPerros = [
            {name:"Zafiro",edad:"1 año",edad:"1 año", espacio:"Pequeño",tamaño:"Mediano",url:"1.jpg"},
						{name:"Zafiro",edad:"1 año",edad:"1 año",espacio:"Pequeño",tamaño:"Mediano", url:"2.jpg"},
						{name:"Zafiro",edad:"1 año",edad:"1 año",espacio:"Pequeño",tamaño:"Mediano",url:"3.jpg"},
						{name:"Zafiro",edad:"1 año",edad:"1 año",espacio:"Pequeño",tamaño:"Mediano",url:"4.jpg"},
						{name:"Zafiro",edad:"1 año",edad:"1 año",espacio:"Pequeño",tamaño:"Mediano",url:"5.jpg"}];


	var documentFragment = document.createDocumentFragment();

	arrayPerros.forEach(datosPerros);
	function datosPerros(element){

		var url = "assets/img/";
		var containerImg = document.createElement("div");
		containerImg.classList.add("container-img");
		var img = document.createElement("img");
		img.setAttribute("src",url+element.url);
		img.setAttribute("alt",element.name);
		var contenedorTexto = document.createElement("div");
		contenedorTexto.classList.add("contenedor-texto");
		var p = document.createElement("p");
		p.innerText = "Nombre: "+ element.name  +
                   "\n Tamaño: "+ element.tamaño +
                   "\n Edad: "+ element.edad+
                   "\n Espacio Requerido: "+ element.espacio;


		containerImg.appendChild(img);
		containerImg.appendChild(contenedorTexto);
		containerImg.appendChild(p);

		documentFragment.appendChild(containerImg);
	}
	document.getElementById("contenido").appendChild(documentFragment);

});
