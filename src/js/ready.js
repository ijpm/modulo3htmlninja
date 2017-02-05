var $ = require('jquery');
$(document).ready(function(){
	if (!localStorage.likes) {
		localStorage.likes=[];
	};
	$('.comment-like').each(function () {
		var nombre = $(this).data("nombre");
		if (localStorage.likes.indexOf(nombre)!== -1) {
			$(this).html('<i class="fa fa-heart" aria-hidden="true"></i>');
		}
		$(this).click(function(){
			localStorage.likes.push(nombre);
		});
	});

});