function Mostrar()
{
//al seleccionar un mes informar. 
//si tiene 28 días. 
//si tiene 30 días. 
//si tiene 31 días.omo la edad  
var mesDelAño = document.getElementById('mes').value;



switch (mesDelAño)	{
				
		default:

		
		case "febrero": 

			alert("Tiene 28 días");
			break;

	    case "enero":
	    case "marzo":
	    case "mayo":
	    case "julio":
	    case "agosto":
	    case "octubre":
	    case "diciembre":
    
	    	alert("Tiene 31 días");
	        break;
	   	
	    
   
	    		 }	

}//FIN DE LA FUNCIÓN