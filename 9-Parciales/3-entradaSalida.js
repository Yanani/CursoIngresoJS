//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
 var ancho;
 var largo;
 var perímetroAlambrado;

 ancho=document.getElementById('ancho').value;
 largo=document.getElementById('largo').value;

 perímetroAlambrado= [(parseInt(ancho))*2 + (parseInt(largo))*2]*6;

 console.log("La cantidad de alambre necesaria es: " +perímetroAlambrado);




 // alert("La cantidad de alambre necesaria es: " +perímetroAlambrado);










}



//Realizar el algoritmo que al presionar el botón "Mostrar" tome por ID dos datos, 
//el largo y ancho de un terreno y luego que muestre cuantos metros de alambre se necesitan para colocarle 6 hilos de alambrado a su perímetro