function Mostrar()
{

var limite;
var contadorPares=0
limite=prompt("ingrese limite");
limite=parseInt(limite);
for(var indice=1;indice<limite;indice++)
{

	if(indice%2==0)

      {
    	contadorPares++;
      }

    }

 document.write(contadorPares);
}//FIN DE LA FUNCIÓN