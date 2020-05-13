$(document).ready(function(){
    var slide = $('.b-main-slider__slide');
    if($(window).width() > 767){
        $(slide).on('mouseover', function(){
            $(slide).addClass('active');
            if($(this).siblings('a').hasClass('active')){
                $(this).siblings('a').removeClass('active');
            };
        });
    };
    
});