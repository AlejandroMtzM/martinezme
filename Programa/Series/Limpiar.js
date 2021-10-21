function Limpiar() {
    var divs = ["Arrays","Tablas","TablaMensaje","MensajeFinal"];
    if (document.getElementsByClassName("Renglon").length != 0) {
        for (let i = 0; i < divs.length; i++) {
            var div = document.getElementById(divs[i]);
            while (div.hasChildNodes()) {
                div.removeChild(div.firstChild)
            }
        }
        numerosPrimos =[], numerosPar =[],numerosImpar =[], numeroNatural = [], SerieCompleta =[];
    }
}
function BorrarElementos() {
    if (document.getElementsByClassName('Opciones').length > 1) {
        var formulario = document.getElementById('frmPrincipal');
        formulario.removeChild(formulario.lastChild);
        numero--;        
    }
}