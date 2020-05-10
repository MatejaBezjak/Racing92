$(document).ready(function(){
    $('.b-news__slider-wrapper').slick({
        variableWidth: true,
        centerPadding: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        centerMode: false,
        adaptiveHeight: true,
        infinite: true,
        // rows: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    variableWidth: true,
                    centerPadding: false,
                    // rows: 0,
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});