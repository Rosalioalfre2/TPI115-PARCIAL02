var fila="<tr><td class='id'></td><td class='Nombre'></td><td class='Descripcion'></td><td class='price'></td> <td class='imagen'></td><td class='Video'></td><td class='Categoria'></td><td class='Opciones'></td></tr>";
	 var deportes=null;
  function codigoCat(catstr) {
	var code="null";
	switch(catstr) {
		case "Deportes de motor": code = "c1"; break;
		case "Deportes de pelota": code = "c2"; break;
		case "Deportes de tiro": code = "c3"; break;
		case "Deportes extremos": code = "c4"; break;
	}
	return code;
}   
var orden=0;
	  
function listarDeportes(deportes) {
	 // var precio=document.getElementById("price"); 
	 var num=deportes.length;
	  var listado=document.getElementById("listado");
	  var nombre,descripcion,imagen,modo_de_juego,lugar_de_juego,cantidad_de_jugadores,herramientas_necesarias,video,nombre_de_categoria;
	  var tbody=document.getElementById("tbody"),nfila=0;
	  tbody.innerHTML="";
	  var catcode;
	  for(i=0;i<num;i++) tbody.innerHTML+=fila;
	  var tr; 
	 //ids=document.getElementsByClassName("id");
	  nombre=document.getElementsByClassName("nombre");
      descripcion=document.getElementsByClassName("descripcion"); 
	  imagen=document.getElementsByClassName("imagen");  
	  modo_de_juego=document.getElementsByClassName("modo_de_juego"); 
	  lugar_de_juego=document.getElementsByClassName("lugar_de_juego"); 
	  cantidad_de_jugadores=document.getElementsByClassName("cantidad_de_jugadores"); 
	  herramientas_necesarias=document.getElementsByClassName("herramientas_necesarias"); 
	  video=document.getElementsByClassName("video");  
      nombre_de_categoria=document.getElementsByClassName("nombre_ de_categoria"); 
	  borrar=document.getElementsByClassName("Opciones");
	/*  if(orden===0) {
		  orden=-1;precio.innerHTML="Precio"
		}
	  else{
	     if(orden==1) {
			 ordenarAsc(deportes,"Precio");
			 precio.innerHTML="Precio Ascendente";
			 precio.style.color="darkgreen";
			}
	     else{
			if(orden==-1) {
				ordenarDesc(deportes,"Precio");
				precio.innerHTML="Precio Descendente";
				precio.style.color="blue";
				}
			}
	  }*/
		listado.style.display="block";
        for(nfila=0;nfila<num;nfila++) {

               // ids[nfila].innerHTML=deportes[nfila].id;
                nombre[nfila].innerHTML=deportes[nfila].Nombre;
                descripcion[nfila].innerHTML=deportes[nfila].Descripcion;
                categoria[nfila].innerHTML= deportes[nfila].Categoria;
                catcode=codigoCat(deportes[nfila].Categoria);
                tr=categoria[nfila].parentElement;
                tr.setAttribute("class",catcode);
               // price[nfila].innerHTML="$"+deportes[nfila].Precio;
                imagen[nfila].innerHTML="<img src='"+deportes[nfila].imagen+"'>";
                //video[nfila].innerHTML="<iframe src='https://www.youtube.com/embed/Hlr2KIbm4Y0'></iframe>";
				video[nfila].innerHTML="<a href='"+deportes[nfila].Video+"' target='_blank'>"+ deportes[nfila].Video +"</a>";
				borrar[nfila].innerHTML = "<button>Eliminar</button>";
				borrar[nfila].firstChild.setAttribute(
				"onclick",
				"eliminar('" + deportes[nfila].id + "');"
		);
            }
	}

function obtenerDeportes() {
	fetch('http://localhost:3000/deportes')
	.then(res=>res.json())
	.then(data=>{
		productos=data;
		productos.forEach(
			function(deportes){
				deportes.cantidad_de_jugadores=parseFloat(cantidad_de_jugadores.Precio)
			}
		);
		listarProductos(data)
	})
            

}


window.addEventListener("load", function(){
	document.getElementById("nombre").focus();
});
function agregar(){
	
	nombre=document.getElementsByClassName("nombre").value.toString().trim();
	descripcion=document.getElementsByClassName("descripcion").value.toString().trim(); 
	imagen=document.getElementsByClassName("imagen").value.toString().trim();  
	modo_de_juego=document.getElementsByClassName("modo_de_juego").value.toString().trim(); 
	lugar_de_juego=document.getElementsByClassName("lugar_de_juego").value.toString().trim(); 
	cantidad_de_jugadores=document.getElementsByClassName("cantidad_de_jugadores").value.toString().trim(); 
	herramientas_necesarias=document.getElementsByClassName("herramientas_necesarias").value.toString().trim(); 
	video=document.getElementsByClassName("video").value.toString().trim();
	nombre_de_categoria=document.getElementsByClassName("nombre_de_categoria").value.toString().trim(); 
	
	
	
	
	
	if(nombre==""){
		alert("No se permiten campos vacíos");
		document.getElementById('nombre').value="";
		document.getElementById("nombre").focus();
	}else if(descripcion==""){
		alert("No se permiten campos vacíos");
		document.getElementById('descripcion').value="";
		document.getElementById("descripcion").focus();
	}else if(imagen==""){
		alert("No se permiten campos vacíos");
		document.getElementById('imagen').value="";
		document.getElementById("imagen").focus();
	}else if(lugar_de_juego==""){
		alert("No se permiten campos vacíos");
		document.getElementById('lugar_de_juego').value="";
		document.getElementById("lugar_de_juego").focus();
	}else if(cantidad_de_jugadores==""){
		alert("No se permiten campos vacíos");
		document.getElementById('catidad_de_jugadores').value="";
		document.getElementById("cantidad_de_jugaores").focus();

	}else if(herramientas_necesarias==""){
		alert("No se permiten campos vacíos");
		document.getElementById('herramientas_necesarias').value="";
		document.getElementById("herramientas_necesarias").focus();


	}else if(video==""){
		alert("No se permiten campos vacíos");
		document.getElementById('video').value="";
		document.getElementById("video").focus();
	}else if(modo_de_juego==""){
		alert("No se permiten campos vacíos");
		document.getElementById('modo_de_juego').value="";
		document.getElementById("modo_de_juego").focus();
	}else if(nombre_de_categoria==""){
		alert("No se permiten campos vacíos");
		document.getElementById('nombre_de_categoria').value="";
		document.getElementById("nombre_de_categoria").focus();
	}else{
		if(document.getElementById('precio').value>=0){
			var producto={
				Nombre:nombre,
				Descripcion:descripcion,
				imagen:imagen,
				modo_de_juego:modo_de_juego,
				lugar_de_juego:lugar_de_juego,
				cantidad_de_jugadores:cantidad_de_jugadores,
				herramientas_necesarias:herramientas_necesarias,
				Video:video,
				nombre_de_categoria:nombre_de_categoria
			}
			fetch('http://localhost:3000/deportes',
			{ method:"POST",
				body: JSON.stringify(deporte),
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json; charset=UTF-8',	   
				 }
			})
			.then(res=>res.json())
			.then(data=>data);
			document.getElementById('nombre').value="";
			document.getElementById('descripcion').value="";
			document.getElementById('imagen').value="";
			document.getElementById('modo_de_juego').value="";
			document.getElementById('lugar_de_juego').value="";
			document.getElementById('cantidad_de_jugadores').value="";
			document.getElementById('herramientas_necesesarias').value="";
			document.getElementById('video').value="";
			document.getElementById('nombre_de_categoria').value="";


			orden*=0;
			alert("Se agregó el deporte: "+nombre);
			window. location. reload();
		}else{
			alert("Debe ingresar los datos de manera correcta");
		}
	}
}

function ordenarPre(){
	let btnquitarordenar=document.getElementById("quitarOrdenarbtn");
	orden*= -1;
	listarDeportes(deportes);
	btnquitarordenar.style.display="inline";
}

function quitarOrdenar(){
	let btnquitarordenar=document.getElementById("quitarOrdenarbtn");
	var precio=document.getElementById("price"); 
	orden = 0;
	precio.style.color="black";
	btnquitarordenar.style.display="none";
	obtenerDeportes();
}

var id;
function eliminar(id) {
	fetch('http://localhost:3000/deportes/'+id, { method: "DELETE" }).then(response => response.json()).then(data => deportes = data);
			obtenerDeportes();
			alert("Se ha eliminado el deporte N° " + id);
}

function ordenarDesc(p_array_json, p_key) {
	p_array_json.sort(function (a, b) {
	   if(a[p_key] > b[p_key]) return -1;
 if(a[p_key] < b[p_key]) return 1;
 return 0;
	});
 }
 
 function ordenarAsc(p_array_json, p_key) {
	p_array_json.sort(function (a, b) {
	   if(a[p_key] > b[p_key]) return 1;
 if(a[p_key] < b[p_key]) return -1;
 return 0;
	});
 }