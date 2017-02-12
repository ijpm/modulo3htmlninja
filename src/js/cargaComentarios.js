var CommentService = require('./commentService');
var CommentListManager = require('./commentListManager');
var pintados=false;

if ($('#inview-example').length > 0) {
	var inview = new Waypoint.Inview({
	  element: $('#inview-example')[0],
	  enter: function(direction) {
	    pintarComentarios();
	  }
	})
};

function pintarComentarios(){
	if (pintados==false) {
		CommentListManager.loadComments();
		pintados=true;
	};
}