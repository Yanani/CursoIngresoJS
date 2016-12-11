
/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;

function comenzar()


{

var miRandom=Math.floor((Math.random()* 10) + 1)*2;
var respuesta=sumar| resta| multiplicación| división;

}//FIN DE LA FUNCIÓN
function Responder()
{
	var respuesta= prompt("Ingrese resultado");
	document.getElementById('Ingrese resultado').value='Ingrese resultado';
	

}//FIN DE LA FUNCIÓN
