function mostrar()
{
//tomo la edad  
var edad;

    edad = document.getElementById("edad").value;

    if (edad >= 18)
    {
        alert("Usted es mayor edad")
    }    

    else if (edad <= 12)
    {   
    alert("Usted es menor de edad")
    }
    
    else
    {
        alert("Usted es adolescente")
    }



}//FIN DE LA FUNCIÓN