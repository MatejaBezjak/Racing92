$(document).ready(function(){
    $('#history-slider').slick({
        variableWidth: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        prevArrow: '#history-slider-arrow-left',
        nextArrow: '#history-slider-arrow-right',
        
    });
});