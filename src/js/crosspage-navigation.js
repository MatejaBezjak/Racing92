$(document).ready(function(){
    var header = $('.b-header').outerHeight();
    var crossPageNav = $('#crosspage-nav');
    var crossPageNavPos = crossPageNav.offset().top;


    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if((crossPageNavPos - header <= scrollTop)){
            crossPageNav.addClass('fixed');
        }else{
            crossPageNav.removeClass('fixed');
        }
    });
});