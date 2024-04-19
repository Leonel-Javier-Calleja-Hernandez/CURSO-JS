// Cuando se cargan todos los elementos del <body> se ejecuta la función inicio
window.onload=inicio;

	function inicio(){
		// Se indican todos los eventos que tiene la página
		document.getElementById("boton_acceso").onclick = acceso;
		window.onkeydown=teclado;
	}
	
	function teclado(e){
		// codigo_tecla indica el código de tecla de la tecla pulsada por el usuario almacenada automáticamente en e
		let codigo_tecla=e.keyCode;		
		// Detecta la pulsación del ENTER (código 13)
		if (codigo_tecla==13){
			acceso();
		}		
	}

	function acceso(){
		let nombre = document.querySelector("#nombre").value.toLowerCase()
		let edad = document.querySelector("#edad").value
		console.log(nombre)
		if (nombre=="ervigio" && edad>=18|| nombre=="ardabasto" && edad>=18) {
			location.href="act1_JAB.html";		
		}else if(nombre !="recesvinto" && edad == 70>=90||nombre !="cixolina" && edad < 18) {
			location.href="act2_JAB.html";
		}else if (nombre=="ataulfo" ||nombre =="ataúlfo" && edad == 70>=100) {
			location.href="act3_JAB.html"
		}
		
		
	}