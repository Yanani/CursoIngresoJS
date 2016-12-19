//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//
 var importe;
 var precioFinal;
 
 importe=0;
 precioFinal=0;


 importe=prompt("Ingrese precio del producto");

 precioFinal= parseInt(importe) + parseInt(importe *21/100);


 alert("El precio final es: "  + precioFinal);











	//alert("Funciona 2-EntradaSalida");
	
}





//-Realizar el algoritmo que al presionar el botón "Mostrar" lea un importe de un producto por prompt y muestre el importe final sumándole el IVA (21%)