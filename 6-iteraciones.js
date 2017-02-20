//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
var importe;
var mayor;
var menor;
menor=0;
mayor=0;

for(contador=0; contador<7;contador++)
{
importe=prompt("Ingrese el importe de venta");
importe=parseInt(importe);

while (importe <0)
{
	importe=prompt("Re Ingrese importe");
	importe=parseInt(importe);
}


if(contador==0)
{
	menor=importe;
	mayor=importe;
}

if(importe<menor)
{
	menor=importe;
	
}
if(importe>mayor)
{
	mayor=importe;
	
}
 



}

document.write("<br> El importe menor es: " +menor);
document.write("<br> El importe mayor es: " +mayor);




	
}





