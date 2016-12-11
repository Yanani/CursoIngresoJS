function Mostrar()
{
//tomo la edad  
var horaDelDia = document.getElementById('hora').value;

console.log("hora ingresada: "+horaDelDia);
switch (horaDelDia)	{				
	
		default:
		alert("No es de mañana");
	    break;

		
	    case "7":
	    case "8":
	    case "9":
	    case "10":
	    case "11":
	        	    alert("es de mañana");
	        

    }



}//FIN DE LA FUNCIÓN