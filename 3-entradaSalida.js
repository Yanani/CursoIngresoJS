//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	

var ancho;
var largo;
ancho=0;
largo=0;
alambre=0; 
ancho=document.getElementById('ancho').value;
largo=document.getElementById('largo').value;

ancho=parseInt(ancho);
largo=parseInt(largo);
alambre=(largo*2 + ancho*2)*6;
alambre=parseInt(alambre);





	alert("Los metros que se necesitan son:  "+alambre);
	






}



/*-Realizar el algoritmo que al presionar el botón "Mostrar" tome por ID dos datos,
 el largo y ancho de un terreno y luego que muestre cuantos metros de alambre se necesitan para colocarle 6 hilos de alambrado a su perímetro*/