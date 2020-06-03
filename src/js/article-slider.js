$(document).ready(function(){
    $('#article-slider').slick({
        variableWidth: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        prevArrow: '#article-slider-arrow-left',
        nextArrow: '#article-slider-arrow-right'
    });
});