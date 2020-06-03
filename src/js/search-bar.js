$(document).ready(function(){
    var header = $('.b-header').outerHeight();
    var searchBar = $('#search-bar');
    var searchBarPos = searchBar.offset().top;


    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if((searchBarPos - header <= scrollTop)){
            searchBar.addClass('fixed');
        }else{
            searchBar.removeClass('fixed');
        }
    });
});