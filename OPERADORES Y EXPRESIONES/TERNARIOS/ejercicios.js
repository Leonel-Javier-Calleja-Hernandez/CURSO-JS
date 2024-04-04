var edadDeLeonel = 18 
var numero_1_al_10 = 8
var tuGenero = "mujer"
var comer = "false"
var nombre = "leonel javier callejas hernandez"
var genero = (tuGenero == "mujer")?`eres ${tuGenero}`: "tu eres hombre"

var elNumeroEs = (numero_1_al_10 > 5 )?"el numero es mayor que 5":"el numero es menor que 5"

var mensaje = (edadDeLeonel>=18)? "hola eres mayor" : "hola eres menor"

var tuComer = (comer == "true")?"ya has comido" : `ve a comer ${nombre}` 



alert(`hola ${genero} tu edad es ${edadDeLeonel} y eres ${mensaje} y tu numero es ${numero_1_al_10} , ${elNumeroEs} y ${tuComer}`)