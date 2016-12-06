function Mostrar()
{
//tomo la edad  
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
//o adolescente (entre 13 y 17 años) 
//o niño (menor a 13 años).

	var edad;

				edad= document.getElementById('edad').value;

		if(edad>18)		

		{
			alert("Mayor de Edad");
		}

		//else

			//(edad>13 || edad<17)

		//{
			//alert("adolescente");
		//}
		
		//opción mejor para no consultar tantas veces al procesador:

		else

		

				if(edad<13)

        {
			alert("Niño");
		}			
			
			
				else

		{

			alert("adolescente");

		}
}//FIN DE LA FUNCIÓN