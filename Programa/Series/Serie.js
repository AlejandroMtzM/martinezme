var numero = 2;
function CrearElementos() {
    var from = document.getElementById('frmPrincipal');
    var id = ["Primo","Par","Impar","Natural","Multiplo"];
    var Contenido = ["Primos", " Pares", "Impares","Naturales","Múltipos de:"];
    var div = document.createElement("div");
    div.className = 'container Opciones radio modal-content';
    from.appendChild(div);
        for (let i = 0; i < 5; i++) {
            var input = document.createElement("input");
            input.type = 'radio';
            input.name = 'Tipo' + numero;
            input.id = id[i]+""+numero;
            var label = document.createElement("label");
            label.setAttribute("for",id[i] + numero);
            label.textContent = Contenido[i];
            div.appendChild(input);
            div.appendChild(label);            
        }
    var inputtext = document.createElement("input");
    inputtext.type = 'number';
    inputtext.id = 'inputMul' + numero;
    inputtext.className = 'Multiplo';
    div.appendChild(inputtext);
    numero++;
}
var numerosPrimos =[], numerosPar =[],numerosImpar =[], numeroNatural = [];
function CrearSeries(Mensaje) {
    var num = 1;
    var CantidadDiv = document.getElementsByClassName('Opciones').length;
    for (let i = 1; i <= CantidadDiv; i++) {
        var bandera = false;
        var NumeroPrimo = document.getElementById('Primo'+i).checked;
        var NumeroPar = document.getElementById('Par'+i).checked;
        var NumeroImpar= document.getElementById('Impar'+i).checked;
        var NumeroNatural = document.getElementById('Natural'+i).checked;
        var NumeroMultiplo = document.getElementById('Multiplo'+i).checked;            
        if (NumeroPrimo) {
            for (let j = 3; j <= Mensaje.length; j++) {
                if (primo(j)) {
                    numerosPrimos.push(j);
                }                
            }
            CrearTablas(numerosPrimos,num);
            num++;
            bandera = true;
            numerosPrimos =[];
        }
        if (NumeroPar) {
            for (var j = 2; j <= Mensaje.length; j++) {
                if (j % 2 == 0) {
                    numerosPar.push(j);
                }
            }
            CrearTablas(numerosPar,num);
            num++;
            bandera = true;
            numerosPar =[];
        }
        if (NumeroImpar) {
            for (var j = 1; j <= Mensaje.length; j++) {
                if (j % 2 != 0) {
                    numerosImpar.push(j);
                }
            }
            CrearTablas(numerosImpar,num);
            num++;
            bandera = true;
            numerosImpar =[];
        }
        if (NumeroNatural) {
                for (var j = 1; j <= Mensaje.length; j++) {
                    numeroNatural.push(j);
                }
                CrearTablas(numeroNatural,num);
            num++;
            bandera = true;
            numeroNatural = [];
        }
        if (NumeroMultiplo) {
            var numerosMultiplos =[];
            let multiplo = document.getElementById('inputMul'+i).value;
            if (multiplo != "") {
                for (var j = parseInt(multiplo); j <= Mensaje.length; j+= parseInt(multiplo)) {
                numerosMultiplos.push(j);
                console.log(j);
                }
                CrearTablas(numerosMultiplos,num);
                num++;
                bandera = true;
            }else{ 
                alert("No ha llenado los datos");
                break;
            }
        }
        if(!bandera){
            break;
        }                
    }
    return bandera;     
}

var SerieCompleta=[];
function CrearTablas(array, num) {
    var padre = document.getElementById('Arrays'); 
    var p = document.createElement("p");
    p.className="Renglon";
    var text = "M" + num+ "= ";
    for (let i = 0; i < array.length; i++) {
        text = text + array[i] + ", ";
    }
    text = text.slice(0,-2);
    p.textContent = text;
    padre.appendChild(p);
    var tablapadre = document.getElementById("Tablas");
    var tabla = document.createElement("table");
    tabla.id= 'tabla' + num;
    tabla.className = "table table-bordered Tabla";
    tablapadre.appendChild(tabla);
    var tr = document.createElement("tr");
    tr.id = num;
    tabla.appendChild(tr);
    array.forEach(element => {
        let bandera = false;
        for (var iterator of SerieCompleta) {
            if (element == iterator) {   
                var td = document.createElement("td");
                td.textContent = element;
                td.className = "EsIgual";
                tr.appendChild(td);
                bandera = true;
                break;
            }         
        }
        if (!bandera) {
            var td = document.createElement("td");
            td.textContent = element;
            tr.appendChild(td);
            SerieCompleta.push(element);
        }
    });
}

function MostrarMensaje(mensaje) {
    var Tabla = document.getElementById('TablaMensaje'); 
    Tabla.innerHTML = "";
    var Concatenador = "<table class =\"table table-bordered Tabla\">";
    for (let i = 1; i < 3; i++) {
        if (i == 1) {
            for (let j = 0; j < mensaje.length; j++) {
                Concatenador += "<td>"+mensaje[j]+"</td>";
            }
        }else{
            for (let j = 0; j < mensaje.length; j++){
                Concatenador += "<td>"+(j+1)+"</td>";
            }
        }
        Concatenador += "</tr>";
    }
    Tabla.innerHTML = Concatenador;
}

function MostrarCripto(cripto) {
    var Tabla = document.getElementById('TablaMensaje'); 
    Tabla.innerHTML = "";
    var Concatenador = "<table class =\"table table-bordered Tabla\">";
    for (let i = 1; i < 3; i++) {
        if (i == 1) {
            for (let j = 0; j < cripto.length; j++) {
                Concatenador += "<td>"+cripto[j]+"</td>";
            }
        }else{
            for (let j = 0; j < cripto.length; j++){
                Concatenador += "<td>"+(SerieCompleta[j])+"</td>";
            }
        }
        Concatenador += "</tr>";
    }
    Tabla.innerHTML = Concatenador;
}

function MostrarMensajeFinal(MensajeFinal) {
    var padre = document.getElementById('MensajeFinal'); 
    var MensajeObtenidoTexto = document.createElement("p");
    MensajeObtenidoTexto.textContent = 'Mensaje Obtenido';
    padre.appendChild(MensajeObtenidoTexto);
    var p = document.createElement("p");
    p.id="Resultado"
    var text ="";
    console.log(MensajeFinal);
    for (let i = 0; i < MensajeFinal.length; i++) {
        text = text + MensajeFinal[i] + " ";
    }
    p.textContent = text;
    padre.appendChild(p);
}
