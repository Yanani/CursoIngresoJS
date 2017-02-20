//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

var	nota;
var sexo;
var notaBaja;
var varones;
var suma;
var promedio;
promedio=0;
varones=0;
suma=0;

for (contador=0;contador<6;contador++)
 {
 	nota=prompt("Ingrese nota");
 	nota=parseInt(nota);
    while(nota<0 || nota>10)
 	{
 		nota=prompt("Re ingrese nota");
 		nota=parseInt(nota);
 	}
 	suma= suma+nota;
 	sexo=prompt("Ingrese f o m");
 	 	
    while(sexo!= "f" && sexo!="m")
    {
    	sexo=prompt("Re ingrese sexo");
    }

    if (contador==0)
    {
      	notaBaja=nota;
    }
    if (nota<notaBaja)
     {
     	notaBaja=nota;
     }
    if (sexo=="m" && nota>=6)
    {
    	varones++;
    }

    
 }

promedio=suma/contador;
alert(" El promedio de las notas es: " +promedio);
alert(" La nota más baja es: " +notaBaja);
alert(" La cantidad de varones es: " +varones);








	
}





/*7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10) 
y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/