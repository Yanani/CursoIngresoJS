/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	var numero;
 	var contador=0;
 	var numeroIngresado

    numero=prompt("Ingrese un número");
    numero=('numeroIngresado');
    contador --;
    numeroIngresado=parseInt('numeroIngresado');
    numero>0


	while(contador=numeroIngresado)	

	  	 if  (numero % 2 == 0)
		{	
			 var numerosPares;
			 numerosPares=parseInt('numerosPares');

   
      	 
       	   { 
       	 	   alert("El numero es par");
       	   }


       	}     

   		 else 

   		{
   			 var numerosImpares;
			 numerosImpares=parseInt('numerosImpares');

   		   		
   		 
   		 
			{
				alert("El numero es Impar");
			}
   	    
   	    }
		
   		document.getElementById('numerosPares').value=contador;

   		 
   		{	
   			 var numero;
          	 var contadorDivisores=0
        	 var indice=2; 
			 indice<numero; 
			 indice++;
		 	 numero<100;
		 	 numero=prompt("ingrese numero");
        	 numero=parseInt(numero);
         }  
       		 	

        	 if(numero%indice==0)
		{		 


	         {
	     			contadorDivisores++;
	         }  
    	
       } 
        
       
       if(contadorDivisores==0)
	
	  {
	  document.write("<br>El número es primo");
	  }
	  else
	  {
	  document.write("<br>El número no es primo")
      }
    	
  }    													

/
