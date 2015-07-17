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


        $("#banner").find(".container").children().hide().first().fadeIn(3000).next().delay(2000).fadeIn(3000);
    
    }
    
    $(document).on("DOMContentLoaded",init);


})(jQuery);