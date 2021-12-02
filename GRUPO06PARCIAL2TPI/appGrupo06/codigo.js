obtenerDeportes()

//var fila="<tr><td class='id'></td><td class='Nombre'></td><td class='Descripcion'></td><td class='Imagen'></td> <td class='Modo'></td><td class='Terreno'></td><td class='Cantidad'></td><td class='Herramientas'></td><td class='Video'></td><td class='Categoria'></td><td class='Eliminar'></td></tr>";
var fila="<tr><td class='id' rowspan='8'></td><td>Nombre:</td><td class='Nombre'></td><td class='Cantidad' rowspan='8'></td><td>Imagen</td><td class='Eliminar' rowspan='8'></td></tr><tr><td>Modo de juego:</td><td class='Modo'></td><td class='Imagen' rowspan='3'></td></tr><tr><td>Terreno de juego:</td><td class='Terreno'></td></tr><tr><td>Categoría:</td><td class='Categoria'></td></tr><tr><td class='EncabezadoDescripcion' colspan='2'>Descripción:</td><td>Video</td></tr><tr><td class='Descripcion' colspan='2'></td><td class='Video' rowspan='3'></td></tr><tr><td class='EncabezadoHerramientas' colspan='2'>Herramientas necesarias:</td></tr><tr><td class='Herramientas' colspan='2'></td></tr><tr style='border-rigth: hidden'><td colspan='6' class='Separador'></td></tr>";

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
	var cantidadJugadores = document.getElementById("jugadores");
	cantidadJugadores.setAttribute("onclick","orden*=-1;listarDeportes(deportes);");
	var num=deportes.length;
	var formagregar = document.getElementById("formagregar");
	var listado=document.getElementById("listado");
	var ids,nombres,descripciones,imagenes,modoDeJuegos,terrenoDeJuegos,cantidadDeJugadoresGlobal,herramientasNecesariasGlobal,videos,nombreDeCategorias;
	var tbody=document.getElementById("tbody"),nfila=0;
	tbody.innerHTML="";
	var catcode;
	for(i=0;i<num;i++) tbody.innerHTML+=fila;
	var tr; 
	ids=document.getElementsByClassName("id");
	nombres=document.getElementsByClassName("Nombre");
	descripciones=document.getElementsByClassName("Descripcion");
	imagenes=document.getElementsByClassName("Imagen");
	modoDeJuegos=document.getElementsByClassName("Modo");
	terrenoDeJuegos=document.getElementsByClassName("Terreno");
	cantidadDeJugadoresGlobal=document.getElementsByClassName("Cantidad");
	herramientasNecesariasGlobal=document.getElementsByClassName("Herramientas");
	videos=document.getElementsByClassName("Video");
	nombreDeCategorias=document.getElementsByClassName("Categoria");
	accion=document.getElementsByClassName("Eliminar");
	if(orden===0) {
		orden=-1;cantidadJugadores.innerHTML="Cantidad de jugadores en el mundo"
	}
	else
		if(orden==1) {
			ordenarAsc(deportes,"cantidad_de_jugadores");
			cantidadJugadores.innerHTML="Cantidad de jugadores en el mundo (ascendente)";
			cantidadJugadores.style.color="lightgreen";
		}
		else
			if(orden==-1) {
				ordenarDesc(deportes,"cantidad_de_jugadores");
				cantidadJugadores.innerHTML="Cantidad de jugadores en el mundo (descendente)";
				cantidadJugadores.style.color="red";
			} 
	formagregar.style.display="block";
	listado.style.display="block";
	for(nfila=0;nfila<num;nfila++) {
		ids[nfila].innerHTML=deportes[nfila].id;
		nombres[nfila].innerHTML=deportes[nfila].nombre;
		descripciones[nfila].innerHTML=deportes[nfila].descripcion;
		imagenes[nfila].innerHTML="<img src='"+deportes[nfila].imagen+"'>";
		modoDeJuegos[nfila].innerHTML = deportes[nfila].modo_de_juego;
		
		terrenoDeJuegos[nfila].innerHTML = deportes[nfila].terreno_de_juego;
		cantidadDeJugadoresGlobal[nfila].innerHTML = deportes[nfila].cantidad_de_jugadores;
		herramientasNecesariasGlobal[nfila].innerHTML = deportes[nfila].herramientas_necesarias;
		//videos[nfila].innerHTML = deportes[nfila].video;
		//video[nfila].innerHTML="<iframe src='"+deportes[nfila].video+"'></iframe>";
		//videos[nfila].innerHTML="<a href='"+deportes[nfila].video+"' target='_blank'>"+ deportes[nfila].video +"</a>";
		videos[nfila].innerHTML="<iframe width=\"400\" height=\"225\" src=\"" + deportes[nfila].video + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
		nombreDeCategorias[nfila].innerHTML = deportes[nfila].nombre_de_categoria;
		catcode=codigoCat(deportes[nfila].nombre_de_categoria);
		//tr=nombreDeCategorias[nfila].parentElement;
		//tr.setAttribute("class",catcode);
		accion[nfila].innerHTML = "<button id=\"botonModificar\" type=\"button\" class=\"btn btn-warning\">Modificar</button><br><br><br><br><button id=\"botonEliminar\" type=\"button\" class=\"btn btn-danger\">Eliminar</button>";
		accion[nfila].firstChild.setAttribute("onclick","eliminarDeportes('" + deportes[nfila].id + "');");
		tr=accion[nfila].parentElement;
		tr.setAttribute("class",catcode);
		//catcode=codigoCat(deportes[nfila].nombre_de_categoria);
		tr=modoDeJuegos[nfila].parentElement;
		tr.setAttribute("class",catcode);
		tr=terrenoDeJuegos[nfila].parentElement;
		tr.setAttribute("class",catcode);
		tr=nombreDeCategorias[nfila].parentElement;
		tr.setAttribute("class",catcode);
		tr=descripciones[nfila].parentElement;
		tr.setAttribute("class",catcode);
		tr=herramientasNecesariasGlobal[nfila].parentElement;
		tr.setAttribute("class",catcode);
		var separador=document.getElementsByClassName("Separador");
		tr=separador[nfila].parentElement;
		tr.setAttribute("class",catcode);
		var separador=document.getElementsByClassName("EncabezadoDescripcion");
		tr=separador[nfila].parentElement;
		tr.setAttribute("class",catcode);
		var separador=document.getElementsByClassName("EncabezadoHerramientas");
		tr=separador[nfila].parentElement;
		tr.setAttribute("class",catcode);
		console.log(deportes[nfila].nombre_de_categoria)
	}
}

function obtenerDeportes() {
	fetch('http://localhost:3000/deportes')
	.then(res=>res.json())
	.then(data => {
		deportes=data;
		deportes.forEach(deporte => {
			//console.log(deporte.nombre)
			deporte.cantidad_de_jugadores=parseInt(deporte.cantidad_de_jugadores)
			//console.log(deporte.cantidad_de_jugadores)
			//console.log(deporte.nombre_de_categoria)
		});
		listarDeportes(deportes)
	})
	//.catch(err => console.log(err))
}


/*window.addEventListener("load", function(){
	document.getElementById("nombre").focus();
});*/

function agregarDeportes(){
	var nombreTxt=document.getElementById("AddNombre").value;
	var descripcionTxt=document.getElementById("AddDescripcion").value;
	var imagenUrl=document.getElementById("AddImagenUrl").value;
	var modoDeJuegoTxt=document.getElementById("AddModoJuego").value;
	var terrenoDeJuegoTxt=document.getElementById("AddTerrenoJuego").value;
	var cantidadDeJugadoresTxt=document.getElementById("AddCantidadJugadores").value;
	var herramientasNecesariasTxt=document.getElementById("AddHerramientasNecesarias").value;
	var videoUrl=document.getElementById("AddVideoUrl").value;
	var nombreDeCategoriaTxt=document.getElementById("AddCategoria").value;
	
	
	if(nombreTxt==""){
		alert("No se permiten campos vacíos. Escriba un nombre.");
		document.getElementById("AddNombre").focus();
	}else if(descripcionTxt==""){
		alert("No se permiten campos vacíos. Agregué una descripción.");
		document.getElementById("AddDescripcion").focus();
	}else if(imagenUrl==""){
		alert("No se permiten campos vacíos. Agregue una dirección de imagen.");
		//document.getElementById("AddImagenUrl").value="";
		document.getElementById("AddImagenUrl").focus();
	}else if(modoDeJuegoTxt==""){
		alert("No se permiten campos vacíos. Seleccione un modo de juego.");
		document.getElementById("AddModoJuego").focus();
	}else if(terrenoDeJuegoTxt==""){
		alert("No se permiten campos vacíos. Seleccione un terreno de juego.");
		document.getElementById("AddTerrenoJuego").focus();
	}else if(herramientasNecesariasTxt==""){
		alert("No se permiten campos vacíos. Agregué las herramientas necesarias.");
		document.getElementById("AddHerramientasNecesarias").focus();
	}else if(videoUrl==""){
		alert("No se permiten campos vacíos. Agregue una dirección de video.");
		document.getElementById("AddVideoUrl").focus();
	}else if(cantidadDeJugadoresTxt==""){
		alert("No se permiten campos vacíos. Agregue una cantidad de jugadores.");
		document.getElementById("AddCantidadJugadores").focus();
	}else if(nombreDeCategoriaTxt==""){
		alert("No se permiten campos vacíos. Seleccione una categoria.");
		document.getElementById("AddCategoria").focus();
	}else{
		if(document.getElementById("AddCantidadJugadores").value>=0){
			var deporte={
				nombre:nombreTxt,
				descripcion:descripcionTxt,
				imagen:imagenUrl,
				modo_de_juego:modoDeJuegoTxt,
				terreno_de_juego:terrenoDeJuegoTxt,
				cantidad_de_jugadores:cantidadDeJugadoresTxt,
				herramientas_necesarias:herramientasNecesariasTxt,
				video:videoUrl,
				nombre_de_categoria:nombreDeCategoriaTxt
			}
			fetch('http://localhost:3000/deportes/',
			{ method:"POST",
				body: JSON.stringify(deporte),
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json; charset=UTF-8',	   
				 }
			})
		alert("Se agregó el deporte: "+nombreTxt);
		obtenerDeportes()
		}
	}
}

 var id;
function eliminarDeportes(id) {
	fetch('http://localhost:3000/deportes/'+id, { method: "DELETE" }).then(response => response.json()).then(data => deportes = data);
			obtenerDeportes();
			alert("Se ha eliminado el deporte N° " + id); }

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