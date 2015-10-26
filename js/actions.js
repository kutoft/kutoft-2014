$(document).ready(function(){
    var windowHeight = $(window).height();
    $(".header_bg_wrap").css("height", windowHeight);
    
    $("a").smoothScroll({
        speed: 1250
    });
    
    $(".bx-wrapper").css("max-width", "1000px !important", "position", "relative");
    
    $(".p_header").click(function(event){
        
        $(this).next().toggleClass("p_active");

        $(this).toggleClass("p_header_active");
        $(this).children(":first").children().toggleClass("thumb_active");
        $(this).find(".arrow_up").toggleClass("arrow_down");
    });
    
    $(".p_header").one( "click", function() {
        $(this).next().find('.bxslider').bxSlider({
            auto: true,
            mode: 'fade',
            touchEnabled: true,
            preloadImages: 'all'
        });
    });
    
    $(".project:last-child").addClass("project_last");
    
    
});