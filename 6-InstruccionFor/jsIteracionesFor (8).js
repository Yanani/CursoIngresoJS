function Mostrar()
{

var numero;
var contadorDivisores=0
numero=prompt("ingrese numero");
numero=parseInt(numero);
for(var indice=2;indice<numero;indice++)
     {

	if(numero%indice==0)

      {
    	contadorDivisores++;
      }
      

    }

 //document.write(contadorDivisores);
 if(contadorDivisores==0);

     alert("es primo");



}//FIN DE LA FUNCIÓN

//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.



revisar!!!