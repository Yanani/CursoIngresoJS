/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var Edad
 	var Sexo
 	var EstadoCivil
 	var SueldoBruto

    edad=prompt("Ingrese edad entre 18 y 90");    //define
    edad=parseInt(edad);                          //valida
    while(edad>90 || edad<18)                     //modifica
	{
 		edad=prompt("Re -Ingrese edad entre 18 y 90");

	}   //la edad está correcta
	document.getElementById('Edad').value=edad;
   
 
	sexo=prompt("Ingrese sexo f o m");
	
	while(sexo!= "f" && sexo!= "m")
	{
		sexo=prompt("re-ingrese sexo f o m");

	}


    document.getElementById('Sexo').value=sexo;    

    EstadoCivil=prompt("Ingrese su estado civil");                                      //EstadoCivil=parseInt(EstadoCivil);
    
    while(EstadoCivil!= 1 && EstadoCivil!= 2 && EstadoCivil!= 3 && EstadoCivil!=4)       // while(EstadoCivil<1 || EstadoCivil>4)


    {
      EstadoCivil=prompt(" re -Ingrese su estado civil"); 
      //EstadoCivil=parseInt(EstadoCivil);
    }
                                                                                   
     document.getElementById('EstadoCivil').value=EstadoCivil; 


    
      
    //  switch(EstadoCivil)
       
     //      case 1:
     //         EstadoCivil="soltero";
     //     break;
     //     case 2:
      //        EstadoCivil= "casado";     

     
     SueldoBruto=prompt("Ingrese SueldoBruto");
     SueldoBruto=parseInt(SueldoBruto);
     while(SueldoBruto<8000)

     {
     	   SueldoBruto=prompt(" Re -ingrese SueldoBruto");
     	   SueldoBruto=parseInt(SueldoBruto);
     }
     document.getElementById('Sueldo').value=SueldoBruto; 


     Legajo=prompt("Ingrese su número de legajo");
     while(Legajo>1000 && Legajo<10000)

     {
    
           Legajo=prompt(" re -Ingrese su número de Legajo");
     }	

     document.getElementById('Legajo').value=Legajo;

}


  
//A.	Edad, entre 18 y 90 años inclusive. 
//B.	Sexo, “M” para masculino y “F” para femenino 
//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos 
//D.	Sueldo bruto, no menor a 8000. 
//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda. 
//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.