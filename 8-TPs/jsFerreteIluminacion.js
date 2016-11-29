/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var CantidadLamparas;
var marca
//ver precio final; 	
var precioBruto;
var precioFinal;

CantidadLamparas=document.getElementByid('Cantidad').value;
Marca= document.getElementByid ('Marca').value;
precioBruto=CantidadLamparas=35;

if(CantidadLamparas>5)
{
	precioFinal=precioBruto*0.5;
}
if(CantidadLamparas==5)
{
 	if(marca=="ArgentinaLuz")
     { 
       precioFinal= precioBruto*0.6;
     }
     else
     {
       precioFinal=precioBruto*0.7;
     }   	
}
if(CantidadLamparas==4)
{ 
   if(marca=="ArgentinaLuz" II marca=="“FelipeLamparas”")
   {
   	    precioFinal=precioBruto*0.75;
   	}
   	else
   	{
   	    precioFinal= precioBruto*.8;
   	    }
   	 }
   	 if(CantidadLamparas==3)   	
    {
    	if(marca=="ArgentinaLuz")
        {
           precioFinal= precioBruto*0.85
    }
    else
    {   	
        















}
