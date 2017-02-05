var $ = require('jquery');

var API_URL = "/api/comments/";

module.exports = {

    // recuperar todas las canciones
    list: function(successCallback, errorCallback) {
        $.ajax({
            url: API_URL,
            type: "get", // get -> recuperar datos en un API REST
            success: function(data) {
                successCallback(data);
            },
            error: function(error) {
                errorCallback(error);
                console.error("CommentServiceError", error);
            }
        })
    },
    // guardar una canción
    save: function(comment, successCallback, errorCallback) {
        $.ajax({
            url: API_URL,
            type: "post", // post -> crear un recurso en un API REST
            data: comment,
            success: function(data) {
                successCallback(data);
            },
            error: function(error) {
                errorCallback(error);
                console.error("CommentServiceError", error);
            }
        });
    }

};
