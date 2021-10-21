$(document).ready(function () {
    $("#btnCifrar").click(function (e) { 
        var Mensaje = document.getElementById('Mensaje').value;
        Mensaje = Mensaje.replace(/ /g, "");
        Limpiar();
        if(Mensaje != ""){
            if(CrearSeries(Mensaje)){
                MostrarMensaje(Mensaje);
                formarCripto(Mensaje);  
            }else {
                alert("Elementos sin Seleccionar");
            }
        }
    });
});

function formarCripto(Mensaje){
    var cripto=[];
    var auxiliar;
    for (const posicion of SerieCompleta) {
        auxiliar = Mensaje[posicion-1];
        cripto.push(auxiliar);
    }
    MostrarMensajeFinal(cripto);
}

function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }   
    }    
    return numero !== 1;    
}