$(document).ready(function () {    
    $('#btnCifrar').click(function (e) {        
        var totalcaracteres = Math.pow(document.getElementById('MatrizLlave').value, 2);
        let Columna = parseInt(document.getElementById('MatrizLlave').value);
        var contenedorp = document.getElementById('Procedimientos');
        var Columnas = document.getElementsByClassName('SubmensajeValor').length;
        var numColumna = 1;
        var MensajeObtenido = [];
        Limpiar(contenedorp);
        for (let i = 1; i <= Columnas; i++) {
            var tdnum = 1;        
            var LongitudColumna = Columna;
            var sumatoria = 0;        
            var p = document.createElement('p');
            var pResultado = document.createElement('p');
            var numid = 1;
            var multiplicaciones = "";
            var resultadomulti = "";
            var mod = 0;
            for (let index = 1; index <= totalcaracteres; index++) {
                if (index > LongitudColumna) {                
                    LongitudColumna += Columna;
                    numid++;
                    var p = document.createElement('p');
                    tdnum = 1;
                    sumatoria = 0;
                    multiplicaciones = "";
                    resultadomulti = "";
                    mod = 0;
                }
                var valorllave = document.getElementById('tdValor' + index).textContent;
                var valorMensaje = document.getElementById('MV'+numColumna+'.'+tdnum).textContent;
                sumatoria = sumatoria + (valorMensaje * valorllave);
                multiplicaciones = multiplicaciones + ' ('+ valorllave +'*'+ valorMensaje +') +';
                resultadomulti = resultadomulti + ' ('+ valorllave * valorMensaje +') +';            
                console.log(multiplicaciones);
                console.log(resultadomulti);
                if (tdnum == Columna) {
                    multiplicaciones = multiplicaciones.slice(0,-1);
                    resultadomulti = resultadomulti.slice(0,-2);
                    mod = sumatoria % alfabeto.length;
                    var letra = ResultadoColumna(mod);                  
                    MensajeObtenido.push(letra);                        
                }
                tdnum++;
            }
            numColumna++;
        }
        pResultado.textContent = MensajeObtenido;
        pResultado.id = 'MensajeObtenido';
        contenedorp.appendChild(pResultado);
    });
});

function ResultadoColumna(mod) {
    for (let index = 0; index < alfabeto.length; index++) {
        if (index == mod) {
            var letra = alfabeto[index];
            break;
        }
    }
    return letra;
}
