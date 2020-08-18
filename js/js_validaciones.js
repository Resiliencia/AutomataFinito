var tablaTransiciones = [
    ["",	"I",	"V",	"X",	"L",	"C",	"D",	"M"],
    ["q0",	"q1",	"q4",	"q6",	"q9",	"q11",	"q14",	"q16"],
    ["q1",	"q2",	"q3",	"q3",	"R",	"R",	"R",	"R"],
    ["q2",	"q3",	"R",	"R",	"R",	"R",	"R",	"R"],
    ["q3",	"R",	"R",	"R",	"R",	"R",	"R",	"R"],
    ["q4",	"q5",	"R",	"R",	"R",	"R",	"R",	"R"],
    ["q5",	"q2",	"R",	"R",	"R",	"R",	"R",	"R"],
    ["q6",	"q1",	"q4",	"q7",	"q8",	"q8",	"R",	"R"],
    ["q7",	"q1",	"q4",	"q8",	"R",	"R",	"R",	"R"],
    ["q8",	"q1",	"q4",	"R",	"R",	"R",	"R",	"R"],
    ["q9",	"q1",	"q4",	"q10",	"R",	"R",	"R",	"R"],
    ["q10",	"q1",	"q4",	"q7",	"R",	"R",	"R",	"R"],
    ["q11",	"q1",	"q4",	"q6",	"q9",	"q12",	"q13",	"q13"],
    ["q12",	"q1",	"q4",	"q6",	"q9",	"q13",	"R",	"R"],
    ["q13",	"q1",	"q4",	"q6",	"q9",	"R",	"R",	"R"],
    ["q14",	"q1",	"q4",	"q6",	"q9",	"q15",	"R",	"R"],
    ["q15",	"q1",	"q4",	"q6",	"q9",	"q12",	"R",	"R"],
    ["q16",	"q1",	"q4",	"q6",	"q9",	"q11",	"q14",	"q17"],
    ["q17",	"q1",	"q4",	"q6",	"q9",	"q11",	"q14",	"q18"],
    ["q18",	"q1",	"q4",	"q6",	"q9",	"q11",	"q14",	"R"],
    ["R",	"R",	"R",	"R",	"R",	"R",	"R",	"R"]
    ];

function validar(){
    $('#input').on("input", function(){
        $(this).val($(this).val().replace(/[^ivxlcdmIVXLCDM]/, ''));
        $(this).val($(this).val().toUpperCase());
    });
}

function reset(){
    document.getElementById("input").value = "";
    document.getElementById("tablaResultados").style.display = "none";
    document.getElementById("input").focus();
}

function analizar(){
    if(document.getElementById("input").value !== ""){
        ejecutar();
        document.getElementById("tablaResultados").style.display = "table";
    }
    document.getElementById("input").focus();
}

function ejecutar(){
    var estadoActual = "q0";
    var palabra = document.getElementById("input").value.toUpperCase();
    document.getElementById("numero").innerHTML = palabra;
    document.getElementById("input").value = "";
    var letra;
    var recorrido = "q0 -> ";

    while(palabra.length !== 0 && estadoActual !== "R"){
        letra = palabra.charAt(0);
        estadoActual = transicion(estadoActual, letra);
        recorrido += estadoActual+" -> ";
        palabra = palabra.substring(1);
    }
    recorrido = recorrido.substring(0, recorrido.length - 4);

    if(estadoActual !== "R"){
        document.getElementById("resultado").innerHTML = "Aceptado";
    }
    else{
        document.getElementById("resultado").innerHTML = "Rechazado";
    }
    document.getElementById("estadoFinal").innerHTML = estadoActual;
    document.getElementById("recorrido").innerHTML = recorrido;
}

function transicion(estadoActual, letra){
    var estadoSiguiente = "";
    for(var i=1; i<21; i++){
        if(tablaTransiciones[i][0] === estadoActual){
            for(var j=1; j<8; j++){
                if(tablaTransiciones[0][j] === letra){
                    estadoSiguiente = tablaTransiciones[i][j];
                }
            }
        }
    }
    return estadoSiguiente;
}