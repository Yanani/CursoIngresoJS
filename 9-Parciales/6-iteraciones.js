//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
var venta;
var minimo;
var maximo;
var contador; 


minimo=0;
maximo=0;
venta=0;
venta=prompt("Ingrese venta del día");
venta=parseInt(venta);

  
  for (contador=0;contador<7;contador++)
  		contador=parseInt(contador);
  
  	
{

		

		if (contador=0) 

		{
			venta=prompt(" Re ingrese importe de venta"),
			venta=parseInt(venta);

		}


				
			if (venta==0) 

				{  

					maximo=venta;
					minimo=venta;

				}


		else 


		  {

		  	if (minimo<venta)

		  	   {

                 minimo=venta;

		  	   }


		  	if (maximo>venta) 


		  	   {


		  	   	maximo=venta;

		  	   }   


        contador++;

		  }//else







}//for

  	
alert("El precio mayor es: " + maximo);
alert("El precio menor es: " + minimo);







}





















