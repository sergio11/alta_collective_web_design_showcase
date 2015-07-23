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

    	//Allow opening popup on middle mouse click. 
    	//Always set it to true if you don't provide alternative source in href.
		// Hinge effect popup
		$('#team .item a').magnificPopup({
		  mainClass: 'mfp-with-fade',
		  removalDelay: 1000, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeClose: function() {
		        this.content.addClass('hinge');
		    }, 
		    close: function() {
		        this.content.removeClass('hinge'); 
		    }
		  },
		  midClick: true
		});


	
    }
    
    $(document).on("DOMContentLoaded",init);


})(jQuery);
