function Mostrar()

{	var importe;
	cantidad=0;
    var	importeIngresado;
    importeIngresado=importe;
    var maximo;
    var minimo;

	while (cantidad<24)
  {
  	importe=prompt("Ingrese el importe");
    importe=parseInt(importe);
     
  	while(importe<0)
  	{
  		importe=prompt("Ingrese el importe");
      importe=parseInt(importe);
  	}//fin de while

  	    cantidad++;

     if(cantidad==1)

     {
     	maximo=importe;
     	minimo=importe;

     }// fin de if
     else
     {
     	if (importe<minimo)

     	 {
     	 	minimo=importe;

     	 }//fin 

     	 if (importe>maximo)

     	  {
     	  	maximo=importe;

     	  } //fin

     	 {
			    alert("El importe maximo de venta es: "+maximo);

     	    alert("El importe minimo de venta es: "+minimo);

     	 }
     	  

     }//fin de while




  }	  	


    
   










}