$(document).ready(function(){
    $('.b-players__slider-wrapper').slick({
        variableWidth: true,
        autoplay: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    centerMode: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});