$(document).ready(function(){
    var header = $('.b-header').outerHeight();
    var filterBar = $('#filter-bar');
    var filterBarPos = filterBar.offset().top;


    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if((filterBarPos - header <= scrollTop)){
            filterBar.addClass('fixed');
        }else{
            filterBar.removeClass('fixed');
        }
    });
});