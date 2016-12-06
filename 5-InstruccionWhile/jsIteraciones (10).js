function Mostrar()
{

	var contador=0;
	var positivos;
	var negativos;
	var ceros;
	var pares;
	var numeroIngresado;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado=prompt("Ingrese número" + contador);   //xq + contador?  xq sí en ej 7 y NO en ej 8
		contador++;
		numeroIngresado= parseInt(numeroIngresado);
		acumulador=acumulador+parseInt(numeroIngresado);

		if(numeroIngresado<0)
        {
        	positivos= positivos+numeroIngresado;
 
        }


        else
        {
        	negativos= negativos+numeroIngresado;
        }	

     	else
        {
        	numeroIngresado= parseInt(numeroIngresado);         // !0  ó  ==0  ó *0
		    acumulador=acumulador+parseInt(numeroIngresado);
        }

        
		
	}
document.getElementById('suma').value=positivos;
document.getElementById('suma').value=negativos;
document.getElementById('suma').value=ceros;
document.getElementById('suma').value=pares;



document.getElementById('positivos').value=positivos;
document.getElementById('negativos').value=negativos;
document.getElementById('ceros').value=ceros;
document.getElementById('pares').value=pares;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN

//Al presionar el botón pedir números hasta que el usuario quiera, mostar:
//1-Suma de los negativos. 2-Suma de los positivos.
 //3-Cantidad de positivos. 4-Cantidad de negativos. 
 //5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).