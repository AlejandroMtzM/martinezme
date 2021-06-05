jQuery(document).on('submit','#formlg',function(event){
    event.preventDefault();
    jQuery.ajax({
        url:'main_app/login.php',
        type:'POST',
        dataType:'json',
        data:$(this).serialize(),
        beforeSend:function(){
          $('.botonlg').val('Validando...');
        }
      })
      .done(function(respuesta){
        console.log(respuesta);
        if (!respuesta.error) {
          if (respuesta.tipo=='Web') {
            location='main_app/Web/admin.php';
          }else if (respuesta.tipo=='Sistemas') {
            location='main_app/Sistemas/usuario.php';
          }
        }else {
          $('.error').slideDown('slow');
          setTimeout(function(){
          $('.error').slideUp('slow');
        },3000);
        $('.botonlg').val('Iniciar Secion');
        }
      })
      .fail(function(resp){
        console.log(resp.responseText);
      })
      .always(function(){
        console.log("complete");
    });
});