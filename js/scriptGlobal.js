(function($){

    var shrinkHeader = 50;

    var init = function(){

        //Reduction Control Header

        $(window).scroll(function(){
            var scroll = window.pageYOffset;
            if (scroll > shrinkHeader) {
                $("body").addClass("scrolled");
            }else{
                $("body").removeClass("scrolled");
            }
        });


        $(".section-type-banner").find(".container").children().first().fadeIn(3000).next().delay(2000).fadeIn(3000);
    	
    	$('.section-type-banner a[href*=#]:not([href=#])').on("click",function(e) {
    		e.preventDefault();
    		e.stopPropagation();
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top - 100
		        }, 1000);
		      }
		    }
		});

    
	
    }
    
    $(document).on("DOMContentLoaded",init);


})(jQuery);
