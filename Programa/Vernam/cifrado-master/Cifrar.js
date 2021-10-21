function PromptDemo() {
    var contrasena=14;
    var binario = [];
    //Ingresamos un mensaje a mostrar
    var textoclaro = prompt("¿cuál es tu texto en claro?", "");
    a=textoclaro.length;
    //Separar el textoclaro
    var sep = [];
    //Ingresar cada letra en un apartado separado de la matriz
    for (var i = 0; i < textoclaro.length; i++) {
      sep[i]=textoclaro[i];
    }
    //Prueba de la separacion de la frase
    for (var x = 0; x < textoclaro.length; x++) {
    }
    //Lista de ascii a binario
    for (var y = 0; y < textoclaro.length; y++) {
      if (sep[y]=="A") {
        binario[y]="01000001";
      }
      else if (sep[y]=="B") {
        binario[y]="01000010";
      }
      else if (sep[y]=="C") {
        binario[y]="01000011";
      }
      else if (sep[y]=="D") {
        binario[y]="01000100";
      }
      else if (sep[y]=="E") {
        binario[y]="01000101";
      }
      else if (sep[y]=="F") {
        binario[y]="01000110";
      }
      else if (sep[y]=="G") {
        binario[y]="01000111";
      }
      else if (sep[y]=="H") {
        binario[y]="01001000";
      }
      else if (sep[y]=="I") {
        binario[y]="01001001";
      }
      else if (sep[y]=="J") {
        binario[y]="01001010";
      }
      else if (sep[y]=="K") {
        binario[y]="01001011";
      }
      else if (sep[y]=="L") {
        binario[y]="01001100";
      }
      else if (sep[y]=="M") {
        binario[y]="01001101";
      }
      else if (sep[y]=="N") {
        binario[y]="01001110";
      }
      else if (sep[y]=="O") {
        binario[y]="01001111";
      }
      else if (sep[y]=="P") {
        binario[y]="01010000";
      }
      else if (sep[y]=="Q") {
        binario[y]="01010001";
      }
      else if (sep[y]=="R") {
        binario[y]="01010010";
      }
      else if (sep[y]=="S") {
        binario[y]="01010011";
      }
      else if (sep[y]=="T") {
        binario[y]="01010100";
      }
      else if (sep[y]=="U") {
        binario[y]="01010101";
      }
      else if (sep[y]=="V") {
        binario[y]="01010110";
      }
      else if (sep[y]=="W") {
        binario[y]="01010111";
      }
      else if (sep[y]=="X") {
        binario[y]="01011000";
      }
      else if (sep[y]=="Y") {
        binario[y]="01011001";
      }
      else if (sep[y]=="Z") {
        binario[y]="01011010";
      }
      else if (sep[y]==" ") {
        binario[y]="00100000";
      }
      if (sep[y]=="a") {
        binario[y]="01100001";
      }
      else if (sep[y]=="b") {
        binario[y]="01100010";
      }
      else if (sep[y]=="c") {
        binario[y]="01100011";
      }
      else if (sep[y]=="d") {
        binario[y]="01100100";
      }
      else if (sep[y]=="e") {
        binario[y]="01100101";
      }
      else if (sep[y]=="f") {
        binario[y]="01100110";
      }
      else if (sep[y]=="g") {
        binario[y]="01100111";
      }
      else if (sep[y]=="h") {
        binario[y]="01101000";
      }
      else if (sep[y]=="i") {
        binario[y]="01101001";
      }
      else if (sep[y]=="j") {
        binario[y]="01101010";
      }
      else if (sep[y]=="k") {
        binario[y]="01101011";
      }
      else if (sep[y]=="l") {
        binario[y]="01101100";
      }
      else if (sep[y]=="m") {
        binario[y]="01101101";
      }
      else if (sep[y]=="n") {
        binario[y]="01101110";
      }
      else if (sep[y]=="o") {
        binario[y]="01101111";
      }
      else if (sep[y]=="p") {
        binario[y]="01110000";
      }
      else if (sep[y]=="q") {
        binario[y]="01110001";
      }
      else if (sep[y]=="r") {
        binario[y]="01110010";
      }
      else if (sep[y]=="s") {
        binario[y]="01110011";
      }
      else if (sep[y]=="t") {
        binario[y]="01110100";
      }
      else if (sep[y]=="u") {
        binario[y]="01110101";
      }
      else if (sep[y]=="v") {
        binario[y]="01110110";
      }
      else if (sep[y]=="w") {
        binario[y]="01110111";
      }
      else if (sep[y]=="x") {
        binario[y]="01111000";
      }
      else if (sep[y]=="y") {
        binario[y]="01111001";
      }
      else if (sep[y]=="z") {
        binario[y]="01111010";
      }
    }
    var contrasenabinario;
    var numeroaceptable;
    var algoritmo;
    algoritmo=(contrasena*contrasena)-88;
    contrasena=algoritmo;
    while (numeroaceptable!=1) {
      if (contrasena<1) {
        contrasena++;
      }
      else if (contrasena<=255 && contrasena>0) {
        contrasenabinario=(contrasena.toString(2));
        numeroaceptable=1;
      }
      else {
        contrasena=contrasena/2;
        contrasena= Math.round(contrasena);
      }
    }
    var clave = ["1","1","1","1","0","0","0","0"];
    var x = 0;
    var temp2;
    if (contrasenabinario.length==8) {
      for (var i = 0; i < 7; i++) {
        clave[i]=contrasenabinario[i];
      }
    }
    
    
    else if (contrasenabinario.length<8) {
      temp2 = 8 - contrasenabinario.length;
      for (var i = 0; i < temp2; i++) {
        clave[i]=0;
        x++;
      }
      for (var t = x; t < 8; t++) {
        clave[t]=contrasenabinario[t-x];
      }
    }
    var cifrado = [];
    var h;
    var z = 0;
    var binariomatriz;
    var temp;
    var arraycifrado = 0;
    for (h = 0; h < textoclaro.length; h++) {
      for (binariomatriz = 0; binariomatriz < 8; binariomatriz++) {
        temp = binario[h][binariomatriz];
        if (temp == clave[z]) {
          cifrado[arraycifrado] = 0;

        }
        else {
          cifrado[arraycifrado] = 1;
        }
        z++;
        if (z==8) {
          z=0;
        }
        arraycifrado++;
      }
      arraycifrado=(h+1)*8;
    }
    alert('El criptograma es el siguiente: '+ cifrado);

    if (textoclaro != null){
    }
    else {
    alert("No has ingresado ningún mensaje");
    }
    }