 //Validación con JQuery para el inicio de sesión.
         $(document).ready(function()
          {
            
            $("#validar").click(function(){
                
                var usuario=$('#User').val();
                var contrasena=$('#Pass').val();

            if( usuario=='Marcos' && contrasena=='marcos123') {
                alert("¡Inicio de sesión correcto!");                                      
            }
            else if( usuario=='Cris' && contrasena=='123456') {
                alert("¡Inicio de sesión correcto!");                                      
            }
            else {
                alert("Inicio de sesión incorrecto");
                }
            });
     
         });
    