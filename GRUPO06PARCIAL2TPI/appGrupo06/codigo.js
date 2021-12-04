obtenerDeportes()

//var fila="<tr><td class='id'></td><td class='Nombre'></td><td class='Descripcion'></td><td class='Imagen'></td> <td class='Modo'></td><td class='Terreno'></td><td class='Cantidad'></td><td class='Herramientas'></td><td class='Video'></td><td class='Categoria'></td><td class='Eliminar'></td></tr>";
var fila="<tr><td class='id' rowspan='8'></td><td>Nombre:</td><td class='Nombre'></td><td class='Cantidad' rowspan='8'></td><td>Imagen</td><td class='Eliminar' rowspan='8'></td></tr><tr><td>Modo de juego:</td><td class='Modo'></td><td class='Imagen' rowspan='3'></td></tr><tr><td>Terreno de juego:</td><td class='Terreno'></td></tr><tr><td>Categoría:</td><td class='Categoria'></td></tr><tr><td class='EncabezadoDescripcion' colspan='2'>Descripción:</td><td>Video</td></tr><tr><td class='Descripcion' colspan='2'></td><td class='Video' rowspan='3'></td></tr><tr><td class='EncabezadoHerramientas' colspan='2'>Herramientas necesarias:</td></tr><tr><td class='Herramientas' colspan='2'></td></tr><tr style='border: inset 0pt'><td colspan='6' class='Separador' style=' border: inset 0pt'></td></tr>";

var deportes=null;
var categorias=null;

function codigoCat(catstr) {
	var code="null";
	switch(catstr) {
		case 1: code = "c1"; break;
		case 2: code = "c2"; break;
		case 3: code = "c3"; break;
		case 4: code = "c4"; break;
	}
	return code;
}


function listarDeportes(deportes) {
	var orden=0;
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
		imagenes[nfila].innerHTML="<img class='imagenesDeportes' src='"+deportes[nfila].imagen+"'>";
		modoDeJuegos[nfila].innerHTML = deportes[nfila].modo_de_juego;
		
		terrenoDeJuegos[nfila].innerHTML = deportes[nfila].terreno_de_juego;
		cantidadDeJugadoresGlobal[nfila].innerHTML = deportes[nfila].cantidad_de_jugadores;
		herramientasNecesariasGlobal[nfila].innerHTML = deportes[nfila].herramientas_necesarias;
		//videos[nfila].innerHTML = deportes[nfila].video;
		//video[nfila].innerHTML="<iframe src='"+deportes[nfila].video+"'></iframe>";
		//videos[nfila].innerHTML="<a href='"+deportes[nfila].video+"' target='_blank'>"+ deportes[nfila].video +"</a>";
		videos[nfila].innerHTML="<iframe width=\"400\" height=\"225\" src=\"" + deportes[nfila].video + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
		//nombreDeCategorias[nfila].innerHTML = deportes[nfila].nombre_de_categoria;
		//nombreDeCategorias[nfila].innerHTML = asignarDeporte(categorias);
		switch(deportes[nfila].id_categoria){
			case 1: nombreDeCategorias[nfila].innerHTML=categorias[0].nombre;break;
			case 2: nombreDeCategorias[nfila].innerHTML=categorias[1].nombre;break;
			case 3: nombreDeCategorias[nfila].innerHTML=categorias[2].nombre;break;
			case 4: nombreDeCategorias[nfila].innerHTML=categorias[3].nombre;break;
		}/*
		switch(deportes[nfila].id_categoria){
			case 1: nombreDeCategorias[nfila].innerHTML="Deportes de motor";break;
			case 2: nombreDeCategorias[nfila].innerHTML="Deportes de pelota";break;
			case 3: nombreDeCategorias[nfila].innerHTML="Deportes de tiro";break;
			case 4: nombreDeCategorias[nfila].innerHTML="Deportes extremos";break;
		}*/
		catcode=codigoCat(deportes[nfila].id_categoria);
		//tr=nombreDeCategorias[nfila].parentElement;
		//tr.setAttribute("class",catcode);
		accion[nfila].innerHTML = "<button id='botonVentanaModificar' type='button' class='btn btn-warning' onclick="+"ventanaModificarDeportes('"+deportes[nfila].id+"');>Modificar</button><br><br><br><br><button id='botonEliminar' type='button' class='btn btn-danger' onclick="+"eliminarDeportes('"+deportes[nfila].id+"');>Eliminar</button>";
		//accion[nfila].firstChild.setAttribute("onclick","eliminarDeportes('" + deportes[nfila].id + "');");
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
			//deporte.cantidad_de_jugadores=parseInt(deporte.cantidad_de_jugadores)
			//console.log(deporte.cantidad_de_jugadores)
			console.log(deporte.id_categoria)
		});
		listarDeportes(deportes)
		
	})
	fetch('http://localhost:3000/categorias')
	.then(res => res.json())
	.then(data =>{
		categorias=data;
		categorias.forEach(categoria =>{
			console.log(categoria.nombre)
		});
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
	var cantidadDeJugadoresTxt=parseInt(document.getElementById("AddCantidadJugadores").value);
	var herramientasNecesariasTxt=document.getElementById("AddHerramientasNecesarias").value;
	var videoUrl=document.getElementById("AddVideoUrl").value;
	var nombreDeCategoriaTxt=document.getElementById("AddCategoria").value;
	var codigoCategoria
	switch(nombreDeCategoriaTxt){
		case "Deportes de motor": codigoCategoria=1;break;
		case "Deportes de pelota": codigoCategoria=2;break;
		case "Deportes de tiro": codigoCategoria=3; break;
		case "Deportes extremos": codigoCategoria=4;break;
	}
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
				id_categoria:codigoCategoria
			}
			fetch('http://localhost:3000/deportes/',
			{ method:"POST",
				body: JSON.stringify(deporte),
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json; charset=UTF-8',	   
				 }
			})

		document.getElementById("AddNombre").value="";
		document.getElementById("AddDescripcion").value="";
		document.getElementById("AddImagenUrl").value="";
		document.getElementById("AddModoJuego").value="";
		document.getElementById("AddTerrenoJuego").value="";
		document.getElementById("AddCantidadJugadores").value="";
		document.getElementById("AddHerramientasNecesarias").value="";
		document.getElementById("AddVideoUrl").value="";
		document.getElementById("AddCategoria").value="";
		alert("Se agregó el deporte: "+nombreTxt);
		obtenerDeportes()
		}
	}
}

var id;
function ventanaModificarDeportes(id){
	//alert("Funciona la direccion del boton modificar id modificado: "+id);
	//alert("nombre de deporte 1"+categorias[0].nombre);
	//var ventModificar=document.getElementById("ventanaModificar");
	id=id-1;
	document.getElementById("ModificarNombre").value=deportes[id].nombre;
	document.getElementById("ModificarDescripcion").value=deportes[id].descripcion;
	document.getElementById("ModificarImagenUrl").value=deportes[id].imagen;
	document.getElementById("ModificarModoJuego").value=deportes[id].modo_de_juego;
	document.getElementById("ModificarTerrenoJuego").value=deportes[id].terreno_de_juego;
	document.getElementById("ModificarCantidadJugadores").value=deportes[id].cantidad_de_jugadores;
	document.getElementById("ModificarHerramientasNecesarias").value=deportes[id].herramientas_necesarias;
	document.getElementById("ModificarVideoUrl").value=deportes[id].video;
	switch(deportes[id].id_categoria){
		case 1: document.getElementById("ModificarCategoria").value=categorias[0].nombre;break;
		case 2: document.getElementById("ModificarCategoria").value=categorias[1].nombre;break;
		case 3: document.getElementById("ModificarCategoria").value=categorias[2].nombre;break;
		case 4: document.getElementById("ModificarCategoria").value=categorias[3].nombre;break;
	}
	document.getElementById("modificarDeportes").setAttribute("onclick","modificarDeportes('" +id+ "');");
	document.getElementById("ventanaModificar").style.display="block";
}

function modificarDeportes(id){
	id=parseInt(id);
	id=id+1;
	var stringid=id;
	var modificarId=id
	var modificarNombre=document.getElementById("ModificarNombre").value;
	var modificarDescripcion=document.getElementById("ModificarDescripcion").value;
	var ModificarImagenUrl=document.getElementById("ModificarImagenUrl").value;
	var ModificarModoJuego=document.getElementById("ModificarModoJuego").value;
	var ModificarTerrenoJuego=document.getElementById("ModificarTerrenoJuego").value;
	var ModificarCantidadJugadores=parseInt(document.getElementById("ModificarCantidadJugadores").value);
	var modificarHerramientasNecesarias=document.getElementById("ModificarHerramientasNecesarias").value;
	var modificarVideoUrl=document.getElementById("ModificarVideoUrl").value
	var modificarIdCategoria=document.getElementById("ModificarCategoria").value;
	switch(modificarIdCategoria){
		case "Deportes de motor": modificarIdCategoria=1;break;
		case "Deportes de pelota": modificarIdCategoria=2;break;
		case "Deportes de tiro": modificarIdCategoria=3;break;
		case "Deportes extremos": modificarIdCategoria=4;break;
	}
	var deporteModificado={
		id:modificarId,
		nombre:modificarNombre,
		descripcion:modificarDescripcion,
		imagen:ModificarImagenUrl,
		modo_de_juego:ModificarModoJuego,
		terreno_de_juego:ModificarTerrenoJuego,
		cantidad_de_jugadores:ModificarCantidadJugadores,
		herramientas_necesarias:modificarHerramientasNecesarias,
		video:modificarVideoUrl,
		id_categoria:modificarIdCategoria
	}
	fetch('http://localhost:3000/deportes/'+stringid,
	{
		method: "PUT",
		headers: {'Content-type': 'application/json; charset=UTF-8'},
		body: JSON.stringify(deporteModificado)
	})
	.then(res => res.json())
	alert("Se modifico el deporte con id "+stringid);
	obtenerDeportes()
}

function cerrarVentanaModificacion(){
	document.getElementById("ventanaModificar").style.display="none";
}

function eliminarDeportes(id) {
	fetch('http://localhost:3000/deportes/'+id, { method: "DELETE" }).then(response => response.json()).then(data => deportes = data);
	alert("Se ha eliminado el deporte N° " + id);
	obtenerDeportes()
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