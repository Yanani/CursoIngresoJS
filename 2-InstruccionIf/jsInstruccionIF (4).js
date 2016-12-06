function Mostrar()
{
//tomo la edad  
//Enunciado:
//Al ingresar una edad debemos informar 
//si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

var edad;

 		edad= document.getElementById('edad').value;

if(edad>13 && edad<18)

		{
			alert("Ud es un adolescente");
 
		}

else
   
         {
         	 alert("Ud. NO es un adolescente");
         }

}//FIN DE LA FUNCIÓN