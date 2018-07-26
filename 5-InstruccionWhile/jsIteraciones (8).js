function mostrar()
{
	var contador=0;
	var numero=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

do{
	numero = parseInt(prompt("ingrese un número: "))

if (numero < 0){
negativo = negativo * numero

contador++
}
else{
positivo = positivo + numero
}

	respuesta= prompt("Queres ingresar otro numero?")
}while (respuesta == 'si')



document.getElementById('suma').value=positivo;

if (contador == 0)
{
	negativo=0
}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN