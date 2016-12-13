function Mostrar()
{
	  

     var numrorandom;
     var contador1=0;
     var contador2=0;
   	 var contador3=0;
   	 var contador4=0;
   	 var contador5=0;
   	 var contador6=0;
   	 var contador7=0;
   	 var contador8=0;
   	 var contador9=0;
   	 var contador10=0;
   	 var contadorPar=0;
   	 var contadorImpar=0;

     var total;
     var porcentaje;
    
     var sumadorPares=0;
     var sumadorImpar=0;

     var totalPares=0;
     var totalImpares=0;

     var encontrado=0;
     var tirada;

	for(contador=0 ;contador<10000 ;contador++)
	{
			numrorandom= Math.floor((Math.random() * 10) +1); 
		   // console.log("palabras : "+numrorandom); 	 

    

		   	switch ( numrorandom)
			{
				case  1: 
				contador1 ++;
				break;
				case  2:
				contador2 ++;
				break;
				case  3:
				contador3 ++;
				break;
				case  4:
				contador4 ++;
				break;
				case  5:
				total=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
				porcentaje= contador5/total*100
				 if (porcentaje<7)
				 {
					contador5++;
				 }
				 else
				 {
				 	contador--
				 	continue; //es parecido al break, vuelvo a la condición previa

				 }				
				 break

				case  6:
				contador6 ++;
				break;
				case  7:
				contador7 ++;
				break;
				case  8:
				contador8 ++;
				break;
				case  9:
				contador9 ++;
				break;
				case  10:
				contador10 ++;
				break; 
			}	//fin del switch
	 
	 if ( numrorandom%2==0) 
	 		        	
        	 {
        	 	    contadorPar++;
        	 	    totalPares=totalPares+numrorandom;
	         }

     else
      		{
      			   contadorImpar++;
      			   totalImpares=totalImpares+numrorandom;
      		}

//en qué vuelta salieron todos los numeros

	if (encontrado==0)
	{

			if (contador1>1&& contador2>1&& contador3>1&& contador4>1&& contador5>1&& contador6>1&& contador7>1&& contador8>1&&contador9>1&&contador10>1)
			{
				encontrado=1;
	 			tirada=contador;

			}



	}









	}//fin for



    


	 total=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;

	 console.log("el total es :" +total);
	 console.log("% de pares es :" +contadorPar/total*100);
	 console.log("% de impares es :" +contadorImpar/total*100);
     console.log("en numero 1 salió :" +contador1+ "veces" + (contador1/total*100)+"%");
     console.log("en numero 2 salió :" +contador2+ "veces"+ (contador2/total*100)+"%");
     console.log("en numero 3 salió :" +contador3+ "veces"+ (contador3/total*100)+"%");
     console.log("en numero 4 salió :" +contador4+ "veces"+ (contador4/total*100)+"%");
     console.log("en numero 5 salió :" +contador5+ "veces"+ (contador5/total*100)+"%");
     console.log("en numero 6 salió :" +contador6+ "veces"+ (contador6/total*100)+"%");
     console.log("en numero 7 salió :" +contador7+ "veces"+ (contador7/total*100)+"%");
     console.log("en numero 8 salió :" +contador8+ "veces"+ (contador8/total*100)+"%");
     console.log("en numero 9 salió :" +contador9+ "veces"+ (contador9/total*100)+"%");
     console.log("en numero 10 salió:" +contador10+ "veces"+(contador10/total*100)+"%");
     console.log("salieron todos los numeros en la tirada: " +tirada);
     
     
     

  //console.log(                                                                               );













//var limite;
//var contadorPares=0
/*limite=prompt("ingrese limite");
limite=parseInt(limite);
for(var indice=1;indice<limite;indice++)
{

	if(indice%2==0)

      {
    	contadorPares++;
      }

    }

 document.write(contadorPares);
 */

}//FIN DE LA FUNCIÓN

//alert("esto funciona de maravilla!");

