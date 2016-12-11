
function Mostrar()
{

var mesDelAño = document.getElementById('mes').value;

console.log("mes seleccionado: "+mesDelAño);
switch (mesDelAño)	{				
		default:
		alert("Tiene 30 días");
	    break;
		case "Febrero": 
			alert("Tiene 28 días");
			break;
	    case "Enero":
	    case "Marzo":
	    case "Mayo":
	    case "Julio":
	    case "Agosto":
	    case "Octubre":
	    case "Diciembre":
    	    alert("Tiene 31 días");
	        
	   	
	    
   
	    		 }	

}//FIN DE LA FUNCIÓN










//al seleccionar un mes informar. 
//si tiene 28 días. 
//si tiene 30 días. 
//si tiene 31 días. 