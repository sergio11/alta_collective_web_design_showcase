(function($){

	$(function(){

		var vals = document.querySelector('.js-min-max-start');
    	var initVals = new Powerange(vals, { min: 2500, max: 25000, start: 2500 });

    	$("#dropzone").dropzone({ url: "/file/ " });
	});

})(jQuery);