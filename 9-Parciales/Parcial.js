function Iniciar()
{
	var Nro;
	Nro=parseInt(prompt("ingrese Nro de ejercicio a probar: "));
	switch(Nro)
	{
		case 1:
			Ejercicio_1();
			break;
		case 2:
			Ejercicio_2();
			break;
		case 3:
			Ejercicio_3();
			break;
	    case 4:
			Ejercicio_4();
			break;
		case 5:
			Ejercicio_5();
			break;
		case 6:
			Ejercicio_6();
			break;
		case 10:
			Ejercicio_10();
			break;
		case 11:
			Ejercicio_11();
			break;
		case 12:
			Ejercicio_12();
			break;
	    case 13:
			Ejercicio_13();
			break;
		case 14:
			Ejercicio_14();
			break;	

		default:
			alert("Te olvidaste de cargar ese ejercicio en el switch")
	}	


{


var edad;
var sexo;
var minimo;
var varones;
var acumulador;
acumulador=0;

for (contador=0;contador<10;contador++) 
	

}
	edad=prompt("Ingrese edad");
	edad=parseInt(edad);

	while(edad <0 && edad >100)
	{
		edad=prompt("re ingrese edad");
		edad=parseInt(edad);

	}

    while(sexo!= "f" && sexo!= "m")
    	{
    		sexo=prompt("reingrese sexo");
    	}

     
    
        acumulador= edad+acumulador;

   if (contador==0)
       {
       	 minimo=nota
       }
    else
	    	{

  			if(nota<minimo)
	  				{
	  					minimo=nota;
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










/*function Ejercicio_1 () 
{
var lado;
var cuadrado;

lado=document.getElementById(CuadroUno).value;
lado=parseInt(lado);

cuadrado=lado*lado;

alert("el cuadrado es: " +  cuadrado);



}










//algoritmo que pida importe de ventas, validar que sea mayor a cero,
// de 24 dias por promp (una por dia), informar mayor importe u ,enor





















	/*var base;
	var perimetro;

	base=document.getElementById('CuadroUno').value;

	perimetro=(parseInt(base))*4;

	alert("El perímetro del cuadrado es: "+perimetro);*/


   /*var superficie;
   var lado;
   lado=document.getElementById('CuadroUno').value;
   superficie=lado*lado

   alert("la superficie del cuadrado es: "  +  superficie);





}


function Ejercicio_2 () 
{
	/*var importe;
	var precio;	

	importe= prompt("Ingrese un importe");
	importe= parseInt(importe);

	
	precio= importe + (importe*21/100);
	
 		
	alert("El precio es: " + precio);*/



	/*recuperatorio Ej 2: realizar el algoritno que lea un importe de un producto
	 por prompt e muestre el importe final descontato un 25% */


/*var importeFinal;
var precio;


precio=prompt("Ingrese precio producto");
precio=parseInt(precio);
importeFinal=(precio* 0.75);


document.write(importeFinal); 
var ventas;
var ventaMinima;
var ventaMaxima;


ventas=prompt("Ingrese venta del dia");


ventaMinima=0;
ventaMaxima=0;


	while(ventas 24 dias)
	{

		if(ventas==0)

		{
			ventaMaxima=ventas;
			ventaMinima=ventas;

		}

		else 
{

		  if (ventas<ventaMinima) 
			{
			 ventaMinima=ventas;

		    }

		  if(ventas>ventaMaxima)

		    {
			 ventaMaxima=ventas
		    }


}
	console.log("mayor importe de venta: " +ventaMaxima  );	
	console.log("menor importe de venta:  " +ventaMinima);

 
}

//3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
//cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.

 function Ejercicio_3 () 


{
	/*var largo= parseInt( document.getElementById('largo').value);
	var ancho= parseInt( document.getElementById('ancho').value);
	var perimetro;
	var cantidad_vueltas=3;

	perimetro=( (largo*2) + (ancho *2) );
	alert("Se necesitaran " + ( perimetro * cantidad_vueltas) + " Metros de alambre");.
	*/
    
		//recuperatorio: 3 - realizar algoritmo que tomo por Id 3 datos:
		// precio1, precio2, y precio 3 de una compra y luego que muestre la suma y el promedio de los precios
/*var precio1;
var precio2;
var precio3;
var suma;
var promedio;

var precio1=0;
var precio2=0;
var precio3=0;
var suma=0;
var promedio=0;

 precio1= document.getElementById('CuadroUno').value;
 precio2= document.getElementById('CuadroDos').value;
 precio3= document.getElementById('CuadroTres').value;

 


 suma= parseInt(precio1)+ parseInt(precio2)+parseInt(precio3);


 promedio= (parseInt(precio1)+ parseInt(precio2)+parseInt(precio3))/3;
 ''
  document.write( "la suma es: "   + suma+   " y el promedio es: "  + promedio );  
}











    


/*
Nivel 2 (instrucción IF, SWITCH)
4- (IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.
  */




	/*

var numeroUno;
var numeroDos;
var resultado;

numeroUno=0;
numeroDos=0;
resultado=0;

numeroUno=prompt("Ingrese primer número");
numeroDos=prompt("Ingrese segundo número");

numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);


 /*recuperatorio 4 Ralizar el algoritmo que pida 2 numeros por prompt,
  lo sume e infomre si el resultado de la suma "positivo","negativo"o "cero"
  por document.write.
function Ejercicio_4 () 

{

var numeroUno;
var numeroDos;
var suma;
var positivo;
var negativo;
var cero;
var numeroUno=0;
var numeroDos=0;
var suma=0;

numeroUno=prompt("Ingrese el primer numero");
numeroDos=prompt("Ingrese el segundo numero");

suma=parseInt(suma);
parseInt(numeroUno) + parseInt(numeroDos);

			if (suma>0);
			{
			document.write("<br>El número es positivo");

			}
			 if (suma=0);

			{
			document.write("<br>El número es cero");
			
			}			 

			if (suma<0); 

			{
			document.write("<br>El número es negativo");
			
			}		
		
			 



	if (numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}

	

		else if (numeroUno>numeroDos)
		{
	 	resultado=numeroUno!=numeroDos;
		}

	    

		else 
		{
		resultado=numeroUno+numeroDos;
		}

	document.write(resultado);*/






//}

//5- (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”

//informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .



/*var diaDeLaSemana;
diaDeLaSemana= prompt("Ingrese dia de la semana");

	switch(diaDeLaSemana)

			{
		
				case  "Domingo":
			    case   "Sábado":
						alert("Es fin de semana!");
						break;

				default:		

					    alert("A trabajar!");
		
			}

/* recuperatorio: realizar el algoritmo que lea la base por ID de un cuadrado 
e informar la superficioe del mismo por alert */


/*function Ejercicio_1 () 
{
   var superficie;
   var lado;
   lado=document.getElementById('lado').value;
   superficie==lado*lado

   alert("la superficie del cuadrado es: "  +  superficie);
*/

/*recuperatorio 5 -switch realizar el algoritmo que pida un mes por prompt. 
Si es diciembre infomar por alert "se vienen las fiestas",
 si enero, por alert "coienza el aço", de lo contrario informar por alert "no es enero, ni
 diciembre"

function Ejercicio_5 () 

{

 var mes;
 mes=prompt("Ingrese el mes");

 switch(mes)

    {
    	case "enero" :
   
       		 alert(" Comienza el año");
        		break;

        case "diciembre" :

        	alert(" se vienen las fiestas");
        		break;

        default :
        	
        	alert("no es no enero ni dicembre");



    }


function Ejercicio_1 () 

/*realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a "cero"), 
de los 24 dias del mes por prompt (una por dia), e informar cual es el mayor imoorte y cual elmenor .

{


var ventas;
var ventaMinima;
var ventaMaxima;


ventas=prompt("Ingrese venta del dia");


ventaMinima=0;
ventaMaxima=0;


	while(ventas 24 dias)
	{

		if(ventas==0)

		{
			ventaMaxima=ventas;
			ventaMinima=ventas;

		}

		else 
{

		  if (ventas<ventaMinima) 
			{
			 ventaMinima=ventas;

		    }

		  if(ventas>ventaMaxima)

		    {
			 ventaMaxima=ventas
		    }


}
	console.log("mayor importe de venta: " +ventaMaxima  );	
	console.log("menor importe de venta:  " +ventaMinima);

	}
		


	
}*/
/*
var lado;
var cuadrado;

lado=document.getElementById(lado).value;
lado=parseInt(lado);

cuadrado=lado*lado;

alert("el cuadrado es: " +  cuadrado);





*/

}























































