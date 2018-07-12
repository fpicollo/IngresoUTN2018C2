function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var max = 11;
	var min = 1;

	var numero = Math.floor(Math.random()* (max - min)+ min);

	if ( numero >= 9)
	{
		alert("Excelente " + numero);
	}

	else if ( numero <= 4)
	{
		alert("Vamos, la proxima se puede " + numero);
	}
	
	else
	{
		alert("Aprobò " + numero);
	}

}//FIN DE LA FUNCIÓN