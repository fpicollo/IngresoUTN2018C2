function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño)
{
    case "Febrero":
        alert("Este mes no tiene màs de 29 dìas")
        break;
    default:
         alert("Este mes tiene 30 o más días")
        break;


}
	


}//FIN DE LA FUNCIÓN