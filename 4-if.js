//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

 /*var resultado;	
 var numero1;
 var numero2;
 numero1=prompt("Ingrese numero1");
 numero2=prompt("Ingrese numero2");
 numero1=parseInt(numero1);
 numero2=parseInt(numero2);
 
 
if(numero1==numero2)
{
  resultado=numero1*numero2;
}

if (numero1>numero2) 
{
  resultado=numero1-numero2;
}

if (numero1<numero2)
{
  resultado=numero1+numero2;
} 



if(numero1==numero2)
{
  resultado=numero1*numero2;
}
else
{
	if (numero1>numero2) 
	{
	  resultado=numero1-numero2;
	}
	else
	{
	  resultado=numero1+numero2;
	} 
	
}


document.write(resultado);*/


//esto funciona bien


var edad;
edad=prompt("Ingrese edad");
edad=parseInt(edad);


if( edad<=12)
{
	document.write("Niño");
}	
/*if (edad>12 && edad<17) {}
{
	document.write("Adolescente");
}
if (edad>18)
{
	document.write("mayor");
}*/

else
{
	if (edad>=12 && edad<17) 
	{
		document.write("Adolescente");
	}
    else
    	document.write("mayor");

}



	
}




/*-Realizar el algoritmo que al presionar el botón "Mostrar" pida dos números por prompt, 
si son iguales que los multiplique, si el primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.*/