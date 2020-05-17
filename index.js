/* Examen de la calculadora*/
var calculador = {
init: function () {

var operandoa;
var operandob;
var operacion;
var punto = document.getElementById("punto")
var pantalla = document.getElementById("display")
pantalla.textContent = "0"
}
}

calculador.init();
/* variables*/
var on = document.getElementById("on");
var sign = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var menos = document.getElementById("menos");
var mas = document.getElementById("mas");
var por = document.getElementById("por");
var dividido =document.getElementById("dividido");
var igual = document.getElementById("igual");
var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var punto = document.getElementById("punto")

/* eventos teclas*/

uno.onclick = function (e) {
display.textContent= display.textContent + "1";

}
dos.onclick = function (e) {
display.textContent= display.textContent + "2";
}
tres.onclick = function (e) {
display.textContent= display.textContent + "3";
}
cuatro.onclick = function (e) {
display.textContent= display.textContent + "4";
}
cinco.onclick = function (e) {
display.textContent= display.textContent + "5";
}
seis.onclick = function (e) {
display.textContent= display.textContent + "6";
}
siete.onclick = function (e) {
display.textContent= display.textContent + "7";
}
ocho.onclick = function (e) {
display.textContent= display.textContent + "8";
}
nueve.onclick = function (e) {
display.textContent= display.textContent + "9";
}
cero.onclick = function (e) {
display.textContent= display.textContent + "0";
}
punto.onclick = function (e) {
display.textContent= display.textContent + ".";
}
sign.onclick = function (e) {
display.textContent= display.textContent + "-";
}
/* eventos operaciones*/
on.onclick = function (e) {
 resetear();
 display.textContent= display.textContent + "0";
}
mas.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "+"
 limpiar();
}
menos.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "-"
 limpiar();
}
por.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "*"
 limpiar();
}
dividido.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "/"
 limpiar();
}
igual.onclick = function (e) {
 operandob = display.textContent;
 resolver();
}

function limpiar(){
  display.textContent = "";
}
function resetear(){
  display.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion= "";
}
function resolver(){
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
resetear();
display.textContent= res;
}


function cambioTamañoTecla(){
  document.getElementById("1").style="width:25%;";
}
document.getElementById("1").onclick=cambioTamañoTecla;
/* Función negativo*/
sign.onclick=("click",function(){
if(display.textContent==="0"){
display.textContent+="";
}else if(display.textContent.indexOf("-")!=-1){
display.textContent+="";
}else{
display.textContent+="-";
}
})
