
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

// $(document).ready(function(){

//     var slide = $('.b-slider-calendar__slide');
//     var firstSlide = {slide: [0,1,2]};
//     // var nextSlide = slide[3];
//     var nextSlide = $(slide).length - $(firstSlide).length;
//     console.log(slide);
//     console.log(firstSlide);
//     console.log(nextSlide);

//     $('.b-slider-calendar__arrow--right').on('click', function(){
//         console.log('desna');

//         if($(nextSlide).length && $(nextSlide).length < $(slide).length){
//             $(slide).animate({left: "-100%"});
//             nextSlide++;
//             console.log(nextSlide);

//             // if($(nextSlide) < $(slide).length ){
//             //     // $(slide).animate({left: "-100%"});
//             //     nextSlide++;
//             //     console.log('a ovo');
//             // };
//         };
//     });
// });