/*function Iniciar () 
{

var notaIngresada;
var acumulador;
acumulador=0;
var contadorVarones;
contadorVarones=0;
var sexo; 
var minima;


for (contador=0; contador<3 ; contador++)

{
  notaIngresada=prompt("Ingrese nota");
  notaIngresada=parseInt(notaIngresada);
  
  contador=parseInt(contador);
  sexo=prompt("Ingrese sexo");
     
     if(notaIngresada>10 || notaIngresada<0)

      {
         notaIngresada=prompt("re Ingrese nota");
         notaIngresada=parseInt(notaIngresada);
      }

     while(sexo!="f" && sexo!="m")
   

       {
         sexo=prompt("reingrese sexo");
       }


     if (notaIngresada<11 && notaIngresada>0)

      {
         acumulador= notaIngresada + acumulador;
         acumulador=parseInt(acumulador);
      }

  
        while(sexo=="f" || sexo=="m") 

           {
              if (sexo=="m")
  
               {    

                 if (notaIngresada <=6)
                       {
                   
                   contadorVarones= contadorVarones+ notaIngresada;
                  
                       }     
   
              
        
     
  
                  if(notaIngresada==0)

                     {
                         notaIngresada==minima;
                         notaIngresada=minima;
                         minima=parseInt(minima);
                     }

                }


 }// for

alert("<br>  total notaIngresada es: " +acumulador);
alert("<br> promedio: " +acumulador/contador);
alert("<br> varones baja nota: " +contadorVarones++);
alert("<br> nota minima: " +minima);

}//fin*/
function Iniciar ()
{
  //Pulsar botón iniciar
  var notaIngresada;
  var sexo;

  var acumulador=0;
  var minimo;
  var contadorVarones=0;

  for(contador=0;contador<5;contador++)
  {
    notaIngresada=prompt("Ingrese nota");
    notaIngresada=parseInt(notaIngresada);

    while(notaIngresada<0 && notaIngresada>10)
    {
      notaIngresada= prompt("Re-ingrese nota");
    }

    sexo=prompt("Ingrese f ó m");

    while(sexo!="f" && sexo!="m")
    {
      sexo= prompt("Re-ingrese sexo");
    }

    acumulador= notaIngresada+acumulador;

  if(contador==0)
    {
      minimo= notaIngresada;
    }
    
  else
    {
      if(notaIngresada<minimo)
      {
      minimo=notaIngresada;
      }
    }

  if(sexo=="m" && notaIngresada>5)
  {
    contadorVarones++;
  }

  }//FIN DEL for

  alert("El promedio de las notas totales es: "+acumulador/contador);
  alert("La nota más baja es: "+minimo);
  alert("Cantidad de varones que su nota haya sido mayor o igual a 6: "+contadorVarones);

}