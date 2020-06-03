$(document).ready(function(){
    $('.b-players__slider-wrapper').slick({
        variableWidth: true,
        autoplay: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        prevArrow: '.b-players__slider-arrow--left',
        nextArrow: '.b-players__slider-arrow--right',
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    centerMode: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '.b-players__slider-arrow--left',
                    nextArrow: '.b-players__slider-arrow--right'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});