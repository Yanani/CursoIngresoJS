function Mostrar()
{
var numero;
var contadorDivisores=0
numero=prompt("ingrese numero");
numero=parseInt(numero);
for(var indice=2;indice<numero ;indice++)
{

	if(numero%indice==0)

      {
    	contadorDivisores++;
      }

    }

 document.write(contadorDivisores);



}//FIN DE LA FUNCIÓN

