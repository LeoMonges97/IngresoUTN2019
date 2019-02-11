/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    
var sueldo;
var x;
var nuevosueldo;

sueldo = parseFloat (document.getElementById("sueldo").value);

x = sueldo * 10 / 100;

nuevosueldo = sueldo + x;

alert ("El aumento es de " + x);

document.getElementById("resultado").value = nuevosueldo;


}
