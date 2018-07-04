/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var num1;
    var num2;
    var total;

    num1 = document.getElementById("sueldo").value;

    num1 = parseInt(num1);

    num2 = 1.10;

    num2 = parseFloat(num2);

    total = num1 * num2;

    document.getElementById("resultado").value = total
	
}
