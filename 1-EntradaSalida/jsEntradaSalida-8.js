/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var numb1;
var numb2;
var division;

numb1 = document.getElementById("numeroDividendo").value;
numb2 = document.getElementById("numeroDivisor").value;

division = numb1 % numb2;

alert ("El resultado es " + division);
}
