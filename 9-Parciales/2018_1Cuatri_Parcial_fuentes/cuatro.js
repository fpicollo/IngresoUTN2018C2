function mostrar()
{
 var numeroUno
 var numeroDos
 var numeroUnoString
 var numeroDosString
 var resultado 

 numeroUno = parseInt (prompt (" Ingrese el primer numero: "))
 numeroDos = parseInt (prompt (" Ingrese el segundo numero: "))

 numeroUnoString = numeroUno.toString();
 numeroDosString = numeroDos.toString();

 if (numeroUno == numeroDos)
{
    resultado = numeroUnoString + numeroDosString

    alert (resultado)
}
else if (numeroUno > numeroDos)
{
    resultado = numeroUno - numeroDos

    alert ("La resta es "  + resultado)
}
else
{
    resultado = numeroUno + numeroDos

    if (resultado > 10)
    {
        alert ("La suma es "  + resultado +  " y es mayor a 10")
    }
    else
    {
        alert ("La suma es "  + resultado)
    }
}

}
