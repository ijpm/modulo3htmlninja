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


	/* Me lleno todos los articulos con fechas random*/
	var fecha =new Date();
	var horas = 0;
	var fechainput;
	$('.fecha-art').each(function (index) {
		if (index==0) {
			fechainput=new Date(fecha.getTime());
		}else if (index==1) {
			fechainput=new Date(fecha.getTime() - 30*60*1000);
		}else{
			fechainput=new Date(fecha.getTime() - (index*21)*60*60*1000);
		}
		$(this).html(fechainput);
	});

	/* Leo las fechas de los articulos y les aplico la visaulizacion correcta */
	var minuto=new Date(fecha.getTime() - 60*1000);
	var hora=new Date(fecha.getTime() - 60*60*1000);
	var dia=new Date(fecha.getTime() - 24*60*60*1000);
	var semana=new Date(fecha.getTime() - (24*60*60*1000)*7);
	var dias_semana=Array('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo');	
	$('.fecha-art').each(function (index) {		
		fechainput=new Date($(this).html());
		if (semana>fechainput) {
			if (fechainput.getDate()<10) {
				var dia2='0'+fechainput.getDate();	
			}else{
				var dia2=fechainput.getDate();
			}
			var mes=fechainput.getMonth()+1;
			if (mes<10) {
				mes='0'+fechainput.getMonth()+1;	
			}else{
				mes=fechainput.getMonth()+1;
			}
			if (fechainput.getHours()<10) {
				var horas='0'+fechainput.getHours();	
			}else{
				var horas=fechainput.getHours();
			}
			if (fechainput.getMinutes()<10) {
				var minutos='0'+fechainput.getMinutes();	
			}else{
				var minutos=fechainput.getMinutes();
			}	
			if (fechainput.getSeconds()<10) {
				var segundos='0'+fechainput.getSeconds();	
			}else{
				var segundos=fechainput.getSeconds();
			}	
			$(this).html(dia2+'/'+mes+'/'+fechainput.getFullYear()+' | '+horas+':'+minutos+':'+segundos);
		}else if(dia>fechainput){
			$(this).html('Publicado el '+dias_semana[fechainput.getDay()]);
		}else if(hora>fechainput){
			$(this).html('Hace '+fechainput.getHours()+' hora/s');
		}else if(minuto>fechainput){
			$(this).html('Hace '+fechainput.getMinutes()+' minuto/s');
		}else{
			$(this).html('Hace '+fechainput.getSeconds()+' segundo/s');
		}
	});

});