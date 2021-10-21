var alfabeto;
function Alfabeto(value) { 
    alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let txt = document.getElementById('Llavetext');
    txt.disabled = false;
}

function DibujarMatrizllave() {
    for (let index = 0; index < 2; index++) {
        if (index == 0) {
            var ClaseMatriz = "Matrizllave";
            var Contenedor = "Matriz";
            var Idtr = "trllave";
            var Idtd = "tdllave";
            var Texto = "A";
        } else {
            ClaseMatriz = "MatrizllaveValores";
            Contenedor = "MatrizValores";
            Idtr = "trValor";
            Idtd = "tdValor";
            Texto = "0";
        }
        if (document.getElementsByClassName(ClaseMatriz).length > 0) {
            var TamañoMatrizllave = document.getElementById('MatrizLlave').value;
            var ContenedorTablallave = document.getElementById(Contenedor);
            var TablaMatrizllave = document.createElement("table");
            TablaMatrizllave.className = ClaseMatriz;
            Limpiar(ContenedorTablallave);
            var tdid = 1;
            ContenedorTablallave.appendChild(TablaMatrizllave);
            for (let i = 0; i < TamañoMatrizllave; i++) {
                var tr = document.createElement('tr');
                tr.id = Idtr+(i+1);
                for (let j = 0; j < TamañoMatrizllave; j++) {
                    var td = document.createElement('td');
                    td.id = Idtd + tdid;
                    td.textContent = Texto;
                    tr.appendChild(td);
                    tdid++;
                }
                TablaMatrizllave.appendChild(tr);
            }
        }
    }
    
}

function Limpiar(Contenedor) {
    while (Contenedor.hasChildNodes()) {
        Contenedor.removeChild(Contenedor.firstChild);
    }
}

function Habilitar(Idinput,InputAnterior) {
    var llavetext = document.getElementById(Idinput);
    if (document.getElementById(InputAnterior).value == "") {
        llavetext.disabled = true;
        llavetext.value = "";
    }else{
        llavetext.disabled = false;
    }
}

function llenarTabla() {
    var TamañoMatrizllave = document.getElementById('MatrizLlave').value;
    var totalcaracteres = Math.pow(TamañoMatrizllave,2);
    var TextoLlave = document.getElementById('Llavetext');
    if (TextoLlave.value.length <= totalcaracteres) {        
        TextoLlave.value = TextoLlave.value.replace(/ /g, "");
        TextoLlave.value = TextoLlave.value.toUpperCase();
        var posicion = 1;
        for (const letra of TextoLlave.value) {
            for (let index = 0; index < alfabeto.length; index++) {
                if (letra == alfabeto[index]) {
                    let td = document.getElementById('tdValor' + posicion);
                    td.textContent = index;
                    index = alfabeto.length;
                }
            }
            var td = document.getElementById('tdllave'+posicion);
            td.textContent = letra;
            posicion++;
        }
        console.log("Este es el total de caracteres "+totalcaracteres);
        console.log("Esta es la possicón "+posicion);
        RellenarTabla(posicion,totalcaracteres);    
    } else {
        alert("Exedió los caracteres");
        TextoLlave.value = TextoLlave.value.slice(0,-1);
    }    
}

function RellenarTabla(posicion,totalcaracteres) {
    for (let i = posicion; i <= totalcaracteres; i++) {
        var td = document.getElementById('tdllave'+i);
        td.textContent = 'A';
        td = document.getElementById('tdValor'+i);
        td.textContent = '0';
    }
}

function DibujarColumna() {
    var NumerodeColumna = 1;
    var NumeroCasilla = 1;
    let Mensaje = document.getElementById('Mensajetext');
    Mensaje.value = Mensaje.value.toUpperCase();
    Mensaje.value = Mensaje.value.replace(/ /g,"");
    var MatrizMensaje = document.getElementById('MatrizMensajeClaro');
    Limpiar(MatrizMensaje);
    
    var div = document.createElement('div');
    div.className = 'container'
    MatrizMensaje.appendChild(div);

    var p = document.createElement('p');
    p.className = 'M';
    p.textContent = 'M' +NumerodeColumna;
    div.appendChild(p);
    
    var Contenedorsubmensaje = document.createElement('div');
    Contenedorsubmensaje.className ='Subm col-xs-6 col-sm-6 col-md-6 col-lg-6';
    div.appendChild(Contenedorsubmensaje);
    
    var tabla = document.createElement('table');
    tabla.id ='M'+NumerodeColumna;
    tabla.className ='Submensaje';
    Contenedorsubmensaje.appendChild(tabla);
    
    var ContenedorsubmensajeValor = document.createElement('div');
    ContenedorsubmensajeValor.className = 'col-xs-6 col-sm-6 col-md-6 col-lg-6';
    div.appendChild(ContenedorsubmensajeValor);

    var tablaMensajeValores = document.createElement('table');
    tablaMensajeValores.id = 'MV' + NumerodeColumna; 
    tablaMensajeValores.className = 'SubmensajeValor';
    ContenedorsubmensajeValor.appendChild(tablaMensajeValores);
    
    let Columna = parseInt(document.getElementById('MatrizLlave').value);
    var LongitudColumna = Columna;
    for (let index = 1; index <= Mensaje.value.length; index++) {
        if (index > LongitudColumna) {
            NumerodeColumna++;
            LongitudColumna += Columna;
            var div = document.createElement('div');
            div.className = 'container'
            MatrizMensaje.appendChild(div);
            var p = document.createElement('p');
            p.className = 'M';
            p.textContent = 'M' +NumerodeColumna;
            div.appendChild(p);
            var Contenedorsubmensaje = document.createElement('div');
            Contenedorsubmensaje.className ='Subm col-xs-6 col-sm-6 col-md-6 col-lg-6';
            div.appendChild(Contenedorsubmensaje);
            var tabla = document.createElement('table');
            tabla.id = 'M'+NumerodeColumna;
            tabla.className ='Submensaje';
            Contenedorsubmensaje.appendChild(tabla);
            var ContenedorsubmensajeValor = document.createElement('div');
            ContenedorsubmensajeValor.className = 'col-xs-6 col-sm-6 col-md-6 col-lg-6';
            div.appendChild(ContenedorsubmensajeValor);      
            
            var tablaMensajeValores = document.createElement('table');
            tablaMensajeValores.id = 'MV'+NumerodeColumna;
            tablaMensajeValores.className = 'SubmensajeValor';
            ContenedorsubmensajeValor.appendChild(tablaMensajeValores);
            NumeroCasilla = 1;
        }
        var posicion = 0;
        var valor = 0;
        for (const letra of alfabeto) {
            if (letra == Mensaje.value[index-1]) {
                valor = posicion;
            }
            posicion++;
        }         
        let tr = document.createElement('tr');
        tabla.appendChild(tr);
        let td = document.createElement('td');
        td.id = 'M'+NumerodeColumna+"."+NumeroCasilla;
        td.textContent = Mensaje.value[index-1];
        tr.appendChild(td);
        let trmv = document.createElement('tr');
        tablaMensajeValores.appendChild(trmv);
        let tdmv = document.createElement('td');
        tdmv.id = 'MV'+NumerodeColumna+'.'+NumeroCasilla;
        tdmv.textContent = valor;
        trmv.appendChild(tdmv)
        NumeroCasilla++;
    }
    RellenarColumna(NumeroCasilla,Columna,NumerodeColumna);
}

function RellenarColumna(NumeroCasilla,Columna,NumerodeColumna) {
    var tabla = document.getElementById('M'+NumerodeColumna);
    var tablavalores = document.getElementById('MV'+NumerodeColumna);
    for (let index = NumeroCasilla; index <= Columna; index++) {
        var tr = document.createElement('tr');
        tabla.appendChild(tr);
        var td = document.createElement('td');
        td.id = 'M'+NumerodeColumna+'.'+NumeroCasilla;
        td.textContent = 'A';
        tr.appendChild(td);
        var trv = document.createElement('tr');
        tablavalores.appendChild(trv);
        var tdv = document.createElement('td');
        tdv.id = 'MV'+NumerodeColumna+'.'+NumeroCasilla;
        tdv.textContent = '0';
        trv.appendChild(tdv);
    }
}