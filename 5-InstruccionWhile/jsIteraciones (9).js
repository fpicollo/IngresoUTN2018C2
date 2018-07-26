function mostrar()
{
	var contador=0;
	var numero=0;
	var maximo;
	var minimo;
	
	var respuesta='si';

do{
	numero = parseInt(prompt("ingrese un número: "))

	contador++
	//o flag

if (contador == 1 ){
maximo =  numero
minimo =  numero
}
if (numero > maximo){
maximo = numero
}
if (numero < minimo){
minimo = numero
}
	respuesta= prompt("Queres ingresar otro numero?")
}while (respuesta == 'si')



document.getElementById('minimo').value=minimo;

document.getElementById('maximo').value=maximo;

}//FIN DE LA FUNCIÓN