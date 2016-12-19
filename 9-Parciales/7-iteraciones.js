//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
var nota;
var sexo;
var varones;
var minima;
var maxima;

var acumulador=0;
var contador=0

minima=0;
maxima=0;

contador++;
nota=prompt("Ingrese su nota");
nota=parseInt(nota);

		 while (notas)

		{
		 nota<0 && nota>10;
		 nota=prompt("Re ingrese su nota");

		}

		while (sexo)

		{

		 sexo!="f" && sexo!="m";
         sexo=prompt("Re ingrese su sexo");

		}
         
        if (nota<5 && sexo=="m")

         {
         	varones++;

         }

   
        if (nota<minima)

		{

			nota=minima;


		}
        	


        if (nota>maxima)
        {

        	nota=maxima;
        }	


}


alert("el promedio de las notas totales es: "   + acumulador/ +contador ;
alert("La nota más baja es: "  + minima);
alert("La nota más alta es: "  + maxima);





