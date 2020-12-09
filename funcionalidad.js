
var operandoa;
var operandob;
var operacion;

function init(){
//variables
var resultado = document.getElementById("resultado");
var reset = document.getElementById("reset");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var igual = document.getElementById("igual");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");

//Eventos 
//razi cuadrada
// diviesion
//cambio de signo




uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";//establecer un contenido al componente
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";//establecer un contenido al componente
}

tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";//establecer un contenido al componente
}

cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";//establecer un contenido al componente
}

cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";//establecer un contenido al componente
}

seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";//establecer un contenido al componente
}

siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";//establecer un contenido al componente
}

ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";//establecer un contenido al componente
}

nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";//establecer un contenido al componente
}

cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";//establecer un contenido al componente
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
    
}
raiz.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "√";
    limpiar();

}
porcentaje.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "%";
    limpiar();


}

masmenos.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "±";
    limpiar();

}

}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent ="";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){

    switch(operacion){
            case "+" : 
                result = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-" : 
            result = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*" : 
            result = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/" : 
            result = parseFloat(operandoa) / parseFloat(operandob);
                break;
            case "√" : 
            result = Math.sqrt(operandoa).toFixed(2); //La propiedad math sqrt saca la raiz cuadrada, to fixed para redondear a(2);
                break;
           case "%" : 
            result = parseFloat((operandoa * operandob)/ 100).toFixed(2); //La propiedad math sqrt saca la raiz cuadrada, to fixed para redondear a(2);
                break;
         case "±" : 
             result = parseFloat(operandoa) *  -1; //La propiedad math sqrt saca la raiz cuadrada, to fixed para redondear a(2);
            break;

    }
    resetear();
    resultado.textContent = result;

}