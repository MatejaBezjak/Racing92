// alert('holaaa');

// $(document).ready(function(){
//     $('.b-slider-calendar').slick({
//         accessibility: true,
//         autoplay: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: true,
//         // centerPadding: '61px',
//         // dots: true,
//         adaptiveHeight: true,
//         infinite: false,
//         // rows: 0,
//         arrows: false
//     });
// });

$(document).ready(function(){
    $('.b-slider-calendar').slick({
        // accessibility: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        // centerPadding: '0px',
        // dots: true,
        adaptiveHeight: true,
        infinite: false,
        // rows: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false
                }
            }
        ]
    });
});