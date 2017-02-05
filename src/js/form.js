var $ = require('jquery');
var CommentService = require('./commentService');
var CommentListManager = require('./commentListManager');

$('.new-comment-form').on("submit", function(){
    var self = this;

    valor = document.getElementById("nombre").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        alert('El campo nombre no se puede dejar en blanco.');
        return false;
    }
    
    valor = document.getElementById("apellidos").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        alert('El campo apellidos no se puede dejar en blanco.');
        return false;
    }

    valor = document.getElementById("email").value;
    if( !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valor)) ) {
      alert('Introduce un email correcto.');
      return false;
    } 

    valor = document.getElementById("comentario").value;
    if( !(/^[\s\S]{10,150}$/.test(valor)) ) {
      alert('Este campo sólo puede contener 150 caracteres, y debe contener al menos 10.');
      return false;
    } 

    // con todos los campos OK, guardamos en el backend la canción

    // creamos el objeto canción que quiero guardar con los datos dle formulario
    var comment = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        email: $("#email").val(),
        comentario: $("#comentario").val(),
        date: new Date()
    };

    // antes de enviar el formulario, bloqueamos el botón de enviar
    $(this).find("button").text("Guardando comentario...").attr("disabled", true);

    // lo enviamos al backend
    CommentService.save(comment, function(data) { // si se guarda bien
        alert("comentario guardado correctamente");
        self.reset(); // resetea el formulario
        $(self).find("button").text("Enviar comentario").attr("disabled", false);
        CommentListManager.loadComments();
    }, function(error) { // si no se guarda
        alert("Se ha producido un error");
        $(self).find("button").text("Enviar comentario").attr("disabled", false); // TODO: refactorizar esto
    });

    return false; // no queremos enviar el formulario nunca

});
