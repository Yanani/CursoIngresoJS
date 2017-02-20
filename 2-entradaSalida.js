//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{


var importe;
importe=prompt("Ingrese importe del producto");
importe=parseInt(importe);
importeFinal= importe+importe*0.21;



	alert(" El  importe final es: " +importeFinal);
	
}





/*2-Realizar el algoritmo que al presionar el botón "Mostrar" lea un importe de un producto por prompt y muestre el importe final sumándole el IVA (21%)*/