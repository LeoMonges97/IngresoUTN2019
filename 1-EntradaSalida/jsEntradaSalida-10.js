/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{

var importe;
var descuento;
var total;

importe = parseFloat (document.getElementById("importe").value);

descuento = importe * 25 / 100

total = importe - descuento;

alert ("El descuento es de " + descuento + "%");

document.getElementById("resultado").value = total;

}
