$(document).ready(function(){
    var header = $('.b-header').outerHeight();
    var navigator = $('#page-navigator');
    var navigatorPos = navigator.offset().top;


    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if((navigatorPos - header <= scrollTop)){
            $('#page-navigator').addClass('fixed');
        }else{
            $('#page-navigator').removeClass('fixed');
        }
    });
});