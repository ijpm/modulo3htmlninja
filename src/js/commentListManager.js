var $ = require('jquery');
var CommentsService = require('./commentService');

module.exports = {

    setUiIdeal: function() {
        $('.comentarios').removeClass().addClass('comentarios');
    },

    setUiBlank: function() {
        $('.comentarios').removeClass().addClass('comentarios no-hay');
    },

    setUiError: function() {
        $('.comentarios').removeClass().addClass('comentarios error');
    },

    setUiLoading: function() {
        $('.comentarios').removeClass().addClass('comentarios cargando');
    },

    loadComments: function() {
        var self = this;

        // mostrar el mensaje de cargando
        self.setUiLoading();

        // cargamos las canciones desde el backend
        CommentsService.list(function(Comments){ // si nos devuelve canciones
            if (Comments.length == 0) {
                self.setUiBlank(); // si no hay canciones -> estado en blanco
            } else {
                // pintar las canciones en el listado
                self.renderComments(Comments);
                self.setUiIdeal(); // ponemos el estado ideal
            }
        }, function(error){ // si se produce algún error
            self.setUiError(); // ponemos el estado error
        });
    },

    renderComments: function(comments) {
        var html = '';
        for (var i in comments) {
            var Comment = comments[i];
            html+='<div class="loader"></div><div class="nocomments">No hay comentarios</div>';
            html+='<div class="row comentario">';
               html+=' <div class="col-sm-3">';
                    html+='<div>';
                        html+='<i class="fa fa-user" aria-hidden="true"></i> '+Comment.nombre+' '+Comment.apellidos;
                    html+='</div>';
                    html+='<div>';
                        html+='Fecha: '+Comment.date;
                    html+='</div>';
                html+='</div>';
                html+='<div class="col-sm-9">';
                    html+=Comment.comentario;
                html+='</div>';
            html+='</div>';
        }
        $("#comentarios-cont").html(html);
    },
}
