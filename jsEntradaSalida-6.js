/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

var numb1;
var numb2;
var suma;

numb1 = parseint (document.getElementById("numeroUno").value);
numb1 = parseint (document.getElementById("numeroDos").value);

suma = numb1 + numb2;

alert ("El resultado de la suma es: " + suma);

}

