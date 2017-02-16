
function Iniciar ()

/*{  

var nota;
var sexo;
var minima;
var varones;
varones=0;
var acumulador;
acumulador=0;
minima=0;

for(contador=0; contador<3;contador++)
{
   nota=prompt("Ingrese nota");
   nota=parseInt(nota);
   sexo=prompt("Ingrese f o m");
        

   while(nota<0 || nota>10)

      {
       nota=prompt("Re ingrese nota");
       nota=parseInt(nota);
      }

   acumulador=nota+acumulador;
   acumulador=parseInt(acumulador);

   while(sexo!='f' && sexo!='m')

      {
        sexo=prompt("Re ingrese sexo");
      }  

     if(contador==0) 
     
      {
        minima=nota;
        minima=parseInt(minima);
      }
      
      else
     
       {
         if(nota<minima)

        {  
          nota=minima;
        }



          if (sexo=='m' && nota>=6) 

          {
            varones++;
          }
       }



}//for
       document.write("<br> El Promedio es: " +acumulador/contador);
       document.write("<br> La nota más baja es: " +minima);
       document.write ("<br> La cantidad de varones con notas iguales o mayor de 6 es: " +varones);

   



}  // iniciar


/* notas, sexo, validar x alert. Promedio notas totales
nota más baja
cant.varones notas mayor o igual a 6*/

//-----------------------------------------------------------------------------------------------------------------------------------------------

/*



/*
numeros positivos, validar,hasta stop del ususario, 
avisar x document.wirte.
-cant pares
-prometdio total
-suma total
-maximo y minimo
*/


//{

/*var numeros;
var pares;
var suma;
var maximo;
var minimo;
var positivos;
var respuesta;

numeros=0;
suma=0;
maximo=0;
minimo=0;
positivos=0;


for(contador=0; contador<3; contador++)
{
   numeros=prompt("Ingrese numero");
   numeros=parseInt(numeros);
   suma=numeros+suma;
   suma=parseInt(suma);
   

   while(numeros<0)

   {
    numeros=prompt("Re Ingrese numeros");
    numeros=parseInt(numeros);
   }
     
   
    if(numeros % 2 ==0)

    { pares=0;
      pares++;
      pares=parseInt(pares);
            
    }

    if(contador==0)
    {
     maximo=numeros;
     minimo=numeros;
     
     
    }
  else
      
    {
        if (numeros<minimo)
        {
        numeros=minimo;
         minimo=parseInt(minimo);       
        }
       
        
          if (numeros>maximo)

          {
            numeros=maximo;
            maximo=parseInt(maximo);             
          }
       
    
    } //else
   
 
  
}//for

document.write("<br> La cantidad de pares es: " + pares);
document.write("<br> El minimo es: " + minimo);
document.write("<br> El maximo es: " + maximo);
document.write("<br> La suma total es: " + suma);
document.write("<br> El Promedio es: " + suma/contador);



*/

//}
//por falta de ID, usé cuadradoUno en vez de lado.
//EJERCICIO 1
/*{
var cuadroUno;
cuadroUno=document.getElementById('CuadroUno').value;
var cuadrado;
cuadrado=cuadroUno*4;

alert("el perimetro es: "+ cuadrado);

}*/



//EJERCICIO 2
/*{
var importe;
importe=prompt("Ingrese importe del producto");
importe=parseInt(importe);
importeFinal= importe + importe*0.21;
document.write("El importe final es: " +importeFinal);
}*/

//EJERCICIO 3
//uso de id 
/*{
var CuadroUno;
var CuadroDos;
CuadroUno=document.getElementById('CuadroUno').value;
CuadroDos=document.getElementById('CuadroDos').value;
var respuesta;
respuesta= (CuadroUno*2 + CuadroDos*2) * 3;

alert("La respuesta del alambre es: " +respuesta);

}
*/

//EJERCICIO 4
/*{
  var num1;
  var num2;
  num1=prompt("Ingrese numero");
  num2=prompt("Ingrese numero");
  num1=parseInt(num1);
  num2=parseInt(num2);
  var respuesta;

  if (num1==num2)
  {
    respuesta=num1*num2;
  }
  else
  {
    if (num1>num2)
     {
      respuesta=num1-num2;
     }
     else
     {
      respuesta=num1+num2;
     }

  }

document.write("La respuesta es: " +respuesta);

}*/

//EJERCICIO 5
/*{
var dia;
dia=prompt("Ingrese dia");

switch (dia)
  {
   case sabado:
   case domingo:
      alert("Es fin de semana");
      break;
   default:
      alert("A trabajar!!");
  }
}*/
/*//EJERCICIO 6
{
var importe;
var minimo;
var maximo;

  for (contador=0; contador<5; contador++)
  {
        importe=prompt("Ingrese importe de venta");
        importe=parseInt(importe);
        while(importe<0)
        {
          importe=prompt("Re ingrese importe");
          importe=parseInt(importe);
        }
  
        if (contador==0)
        {
          minimo=importe;
          maximo=importe;
        }
        else
        {
              if (minimo>importe)
              {
                minimo=importe;
              }
              else
              {
                if (maximo<importe)
                {
                  maximo=importe;
                }
             }
        }
     
  }//for
      document.write("<br> El importe menor es: " +minimo);
      document.write("<br> El importe mayor es: " +maximo);
}//fin*/

//EJERCICIO 7
/*{
var nota;
var sexo;
var menor;
var suma;
var varones;
varones=0;
suma=0;
menor=0;

for(contador=0;contador<3;contador++)
{
    nota=prompt("Ingrese nota");
    nota=parseInt(nota);
    while(nota<0 || nota>10)
    {
     nota=prompt("Re ingrese nota");
     nota=parseInt(nota);
    }
    suma= suma + nota;

    sexo=prompt("Ingrese sexo");
     
    while(sexo!="m" && sexo!="f")
    {
      sexo=prompt("Re Ingrese sexo")
    }

    if (contador==0)
    {
     menor=nota;
    }
    else
    {
      if(menor>nota)
      {
        menor=nota;
      }
    }
    if(sexo=="m" && nota>=6)
    {
      varones++;
    }
}//for

 document.write("<br>El Promedio es: " +suma/contador);
 document.write("<br>La nota más baja es:" +menor);
 document.write("<br>La cantidad de varones es: " +varones)

}*/


















