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
        })
    
    }
    
    $(document).on("DOMContentLoaded",init);


})(jQuery);