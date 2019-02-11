/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var numb1;
var numb2;
var suma;

numb1 = parseInt (document.getElementById("numeroUno").value);
numb2 = parseInt (document.getElementById("numeroDos").value);

suma = numb1 + numb2;

alert ("El resultado es " + suma);

}

function restar()
{
var numb1;
var numb2;
var Resta;

numb1 = document.getElementById("numeroUno").value;
numb2 = document.getElementById("numeroDos").value;

resta = numb1 - numb2;

alert ("El resultado es " + resta);
}

function multiplicar()
{ 
var numb1;
var numb2;
var multiplicacion;

numb1 = document.getElementById("numeroUno").value;
numb2 = document.getElementById("numeroDos").value;

multiplicacion = numb1 * numb2;

alert ("El resultado es " + multiplicacion);
}

function dividir()
{
var numb1;
var numb2;
var division;

numb1 = document.getElementById("numeroUno").value;
numb2 = document.getElementById("numeroDos").value;

division = numb1 / numb2;

alert ("El resultado es " + division);
}

