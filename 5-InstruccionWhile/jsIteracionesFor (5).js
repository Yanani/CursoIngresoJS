function Mostrar()
{
  notas=0;
     contador=0;
         
          promedio=0;
          notaMinima=0;
          contadorVarones=0;     
          contadorVaronesNotaBaja=0;

           var notas;
          var sexo;
     while(contador<5);
      {
        
          notas=prompt("ingrese su nota");
          notas=parseInt(notas);    
          while(notas<10)
          {
            notas=prompt("ingrese su nota");
            notas=parseInt(notas);         
          }

          ///estoy seguro que el dato es correcto   


          sexo=prompt("ingrese su sexo");            
          while(sexo!='f'||sexo!='m')
          {
            sexo=prompt("ingrese su sexo");                
          }
       
   ///estoy seguro que el sexo es correcto   
         
          
        contador++;
         if(contador==1){
          notaMinima=notas;

         }
         else
         {
            if(notas<notaMinima){
              notaMinima=notas;
            }


         }
        
        if()
         
         







       }
  
  


  
  }


}//FIN DE LA FUNCIÓN

