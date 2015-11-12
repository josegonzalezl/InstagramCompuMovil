function doClick(e) {
    alert($.lema.text);
}

function IniciarSesion(e) {
	$.vista2.visible = true;
	$.vista3.visible = false;
	$.textoUsuario.value = "";
	$.textoContraseña.value = "";
	$.textoContraseña2.value = "";
	$.textoNombreUsuario.value = "";
}

function Ingresar(e) {
	var usuario ="jose";
	usuario = $.tfUsuario.value;
	
	if(usuario == "jose"){
		alert("Bienvenido " + usuario);
	}
}

function Registrarse(e) {
	$.vista2.visible = false;
	$.vista3.visible = true;
}


$.index.open();
