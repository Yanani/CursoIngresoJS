function Mostrar()
{

var edad;
var sexo;
var minimo;
var varones;
var acumulador;
acumulador=0;
varones=0;

for (contador=0;contador<2;contador++) 
	
{

	edad=prompt("Ingrese edad");
	edad=parseInt(edad);

	sexo=prompt("ingrese 'm' o 'f'");

	while(edad <0 && edad >100)
	{
		edad=prompt("re ingrese edad");
		edad=parseInt(edad);

	}

    while(sexo!="f" && sexo!="m")
    	{
    		sexo=prompt("reingrese sexo");
    	}

     
    
        acumulador= edad+acumulador;

   if (contador==0)
       {
       	 minimo=edad
       }
    else
	    	{

  			if(edad<minimo)
	  				{
	  					minimo=edad;
	  				}



	    	}//else  

    if (sexo=="m" && edad<21)

    {
    	varones++;
    }










}//fin for


alert("promedio es: " +acumulador/contador);
alert("baja es: " +minimo);
alert("varones es: " +varones);










































/*	var contador=0;
	// declarar variables
	
	var minimo;
	var maximo;
	var respuesta='si';
	var numeroIngresado;


	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado= parseInt(numeroIngresado);

		if(contador==0)
		{
			maximo= numeroIngresado;
			minimo= numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo= numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}
		}
	
		contador++;
		respuesta= prompt("Ingrese no para salir");
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
*/



//Al presionar el botón pedir números hasta que el usuario quiera,
// mostrar el número máximo y el número mínimo.
}