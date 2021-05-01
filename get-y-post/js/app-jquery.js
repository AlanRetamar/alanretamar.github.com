$(document).ready( function () {

    $('#login').submit( function(e){

      let formularioEmpaquetado = {
        usuario: $('#usuario').val(),
        contra: $('#contra').val()
      }

      e.preventDefault()

      // let formularioEmpaquetado = $(this).serialize()

      $.get('login.php',formularioEmpaquetado,toProcessData)
     
      return false

    })

    function toProcessData(user) {
     
      console.log(user)

      if(user === 'autorizado'){
        $('#contenidos_externos').html('<p>Logeado correctamente. Bienvenido</p>')  
      } else{
        $('#contenidos_externos').html('<p> Datos erroneos </p>')
      }

    }


    //$('form#login').submit();

//     $('input#boton').click( function(e) {
  
//     $.get( 'login.php', $('form#login').serialize(), function(data) {
//          // ... do something with response from server
//               //console.log(data)
//               console.log($('form#login').serialize())
//               if(data === true){
//                 $('#contenidos_externos').html('<p>Logeado correctamente. Bienvenido</p>')  
//               } else{
//                 $('#contenidos_externos').html('<p> Datos erroneos </p>')
//               }
//        }
//        //'json' // I expect a JSON response
//     );
//     e.preventDefault()
// });


    
})
