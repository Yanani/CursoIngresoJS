//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	 var suma;
	 suma=0;
	 var num;
	 var pares;
	 pares=0;
	 var maximo;
	 var minimo;
	 maximo=0;
	 minimo=0;
	 var respuesta;
	 var promedio;
	 promedio=0;


	 for(contador=1;    ; contador++)
	 {  
		  num=prompt("ingresar número");
		  num=parseInt(num);
		  while(num<0)
		  {
		  	num=prompt(" Re ingresar numero");
		  	num=parseInt(num);
		  }
		 suma= suma+num;
		 
		 
		 if(num%2==0)
		 {
		 	pares++;
		 }
		/*if(contador==1)
		{
		  	minimo=num;
		  	maximo=num;
		}
		if (minimo>num)
		{
			minimo=num;
		}
		if (maximo<num)
		 {
		 	maximo=num;
		 }*/

		 if(contador==1)
		 {
			minimo=num;
		  	maximo=num;
		 }
		 else
		 {
		 	if(minimo>num)
		 	{
		 		minimo=num;
		 	}
		 	if(maximo<num)
		 	{
		 		maximo=num;
		 	}
		 }

		respuesta=prompt("Si quiere salir marque: S")

		if	(respuesta=='S')
		{
			break;
		}	

	}

	promedio=suma/contador;
	document.write("<br> La cantidad de números pares es: " +pares);
	document.write("<br> El promedio es: " +promedio);
	document.write("<br> La suma total es: " +suma);
	document.write("<br> Numero máximo es: " +maximo);
	document.write("<br> Numero minimo es: " +minimo);







		
}



/*8-Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar números positivos (validar que sea positivo) hasta que el usuario quiera. 
Informar al terminar el ingreso por document.write: 
a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo. */