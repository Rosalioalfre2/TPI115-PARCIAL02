var fila = "<tr><td class='nombre'></td><td class='descripcion'></td><td class='imagen'></td><td class='modo_de_juego'></td><td class='lugar_de_juego'></td><td class='lugar_de_juego'></td><td class='cantidad_de_jugadores'></td><td class='herramientas_necesarias'></td><td class='video'></td><td class='nombre_de_categoria'></td><td class='eliminar'></td></tr>";

var deportes = null;

function codigoCat(catstr) {
	var code = "null";
	switch (catstr) {
		case "Deportes de motor": code = "c1"; break;
		case "Deportes de pelota": code = "c2"; break;
		case "Deportes de tiro": code = "c3"; break;
		case "Deportes extremos": code = "c4"; break;
	}
	return code;
}
var orden = 0;


function listarDeportes(deportes) {
	/* var precio = document.getElementById("price");
	precio.setAttribute("onclick", "orden*=-1;listarProductos(productos);"); */

	var num = deportes.length;
	var listado = document.getElementById("listado");
	var formagregar = document.getElementById("formagregar");
	var ids, titles, prices, descriptions, categories, fotos;
	var tbody = document.getElementById("tbody"), nfila = 0;
	tbody.innerHTML = "";
	var catcode;
	for (i = 0; i < num; i++) tbody.innerHTML += fila;
	var tr;
	ids = document.getElementsByClassName("id");
	titles = document.getElementsByClassName("title");
	descriptions = document.getElementsByClassName("description");
	categories = document.getElementsByClassName("category");
	fotos = document.getElementsByClassName("foto");
	prices = document.getElementsByClassName("price");
	Accion = document.getElementsByClassName("eliminar");
	
	if (orden === 0) { orden = -1; precio.innerHTML = "Precio" }
	else
		if (orden == 1) { ordenarAsc(deportes, "price"); precio.innerHTML = "Precio A"; precio.style.color = "#D8E9A8" }
		else
			if (orden == -1) { ordenarDesc(deportes, "price"); precio.innerHTML = "Precio D"; precio.style.color = "#A7D0CD" }

	formagregar.style.display = "block";		
	listado.style.display = "block";
	for (nfila = 0; nfila < num; nfila++) {
		ids[nfila].innerHTML = deportes[nfila].id;
		titles[nfila].innerHTML = deportes[nfila].title;
		descriptions[nfila].innerHTML = deportes[nfila].description;
		categories[nfila].innerHTML = deportes[nfila].category;
		catcode = codigoCat(deportes[nfila].category);
		tr = categories[nfila].parentElement;
		tr.setAttribute("class", catcode);
		prices[nfila].innerHTML = "$" + deportes[nfila].price;
		fotos[nfila].innerHTML = "<img src='" + deportes[nfila].image + "'>";
		fotos[nfila].firstChild.setAttribute("onclick", "window.open('" + deportes[nfila].image + "');");
		Accion[nfila].innerHTML= "<button>Eliminar</button>"
		Accion[nfila].firstChild.setAttribute("onclick","eliminarDeportes('"+deportes[nfila].id+"');");
	}

}

function obtenerDeportes() {
	 fetch('')
		.then(res => res.json())
		.then(data => {
			deportes = data;
			deportes.forEach(
				function(deportes){
					deportes.price=parseFloat(deportes.price)
				});
				listarDeportes(data)});
}

function agregarProductos() {

	var titutoTxt = document.getElementById("AddNombre").value;
	var descripcionTxt = document.getElementById("AddDescripcion").value;
	var imagenUrl = document.getElementById("AddImagenrUrl").value;
	var modoTxt = document.getElementById("AddModoDeJuego").value;
	var terrenoTxt = document.getElementById("AddTerrenoJuego").value;
	var cantidadJugadores = document.getElementById("AddCantidadJugadores").value;
	var herramientasNecesarias = document.getElementById("AddHerramientasNecesarias").value;
	var videURL = document.getElementById("AddVideoUrl").value;
	var agregarCategoria = document.getElementById("AddCategoria").value;

	urlExReg = /^[a-z]+:[^:]+$/;

	if(imagenUrl === "" || precioTxt === "" || titutoTxt === "" || categoriaTxt === "" || descripcionTxt === ""){
		alert("Favor llenar todos los campos para agregar un producto. Por tal motivo se regresará a la pantalla de inicial");
	}else if(!precioExReg.test(precioTxt)){
		alert("El precio ingresado no es válido. Por tal motivo se regresará a la pantalla de inicial");
		return false;
	}else if(!urlExReg.test(imagenUrl)){
		alert("El URL proporcionada para la imagen del producto no es válida. Por tal motivo se regresará a la pantalla de inicial");
		return false;
	}else{
		var nuevoProducto = {
			image: imagenUrl,
			price: precioTxt,
			title: titutoTxt,
			category: categoriaTxt,
			description: descripcionTxt
		}

		fetch('https://retoolapi.dev/t9lCjr/productos', {
			method: "POST", body: JSON.stringify(nuevoProducto), headers: { 'Accept': 'application/json', 'Content-type': 'application/json; charset=UTF-8', }
		}).then(response => response.json()).then(data => {productos = data; obtenerProductos()});
		alert("Se ha agregado el producto de manera correcta");
	}
}
		
var iden;
function eliminarProductos(iden) {
	fetch('https://retoolapi.dev/t9lCjr/productos/'+iden, { method: "DELETE" })
		.then(response => response.json())
		.then(data =>productos = data);
		obtenerProductos();
		alert("Se ha eliminado el producto N° "+iden); 
}

/* function ordenarDesc(p_array_json, p_key) {
	p_array_json.sort(function (a, b) {
		if (a[p_key] > b[p_key]) return -1;
		if (a[p_key] < b[p_key]) return 1;
		return 0;
	});
}

function ordenarAsc(p_array_json, p_key) {
	p_array_json.sort(function (a, b) {
		if (a[p_key] > b[p_key]) return 1;
		if (a[p_key] < b[p_key]) return -1;
		return 0;
	});
} */