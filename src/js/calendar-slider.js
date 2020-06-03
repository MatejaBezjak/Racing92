
// $(document).ready(function(){
//     $('.b-slider-calendar').slick({
//         // accessibility: true,
//         autoplay: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerMode: false,
//         // centerPadding: '0px',
//         // dots: true,
//         adaptiveHeight: true,
//         infinite: false,
//         // rows: 0,
//         arrows: true,
//         prevArrow: '.b-slider-calendar__arrow--left',
//         nextArrow: '.b-slider-calendar__arrow--right',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     centerMode: true,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false
//                 }
//             }
//         ]
//     });

//     $('.slick-prev').hide();
  
//     $('.b-slider-calendar').on('afterChange', function(event, slick, currentSlide) {  	
//     console.log(currentSlide);
//   	//If we're on the first slide hide the Previous button and show the Next
//     if (currentSlide === 0) {
//       $('.slick-prev').hide();
//       $('.slick-next').show();
//     }
//     else {
//     	$('.slick-prev').show();
//     }
    
//     //If we're on the last slide hide the Next button.
//     if (slick.slideCount === currentSlide + 1) {
//     	$('.slick-next').hide();
//     }
//   });
// });

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

$(document).ready(function(){
    var sliderCalendar = $('.b-slider-calendar').slick({
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
        arrows: true,
        prevArrow: '.b-slider-calendar__arrow--left',
        nextArrow: '.b-slider-calendar__arrow--right',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.b-slider-calendar__arrow--left').hide();
  
    sliderCalendar.on('afterChange', function(event, slick, currentSlide) {  	
    console.log(currentSlide);
  	//If we're on the first slide hide the Previous button and show the Next
    if (currentSlide === 0) {
      $('.b-slider-calendar__arrow--left').hide();
      $('.b-slider-calendar__arrow--right').show();
    }
    else {
    	$('.b-slider-calendar__arrow--left').show();
    }
    
    //If we're on the last slide hide the Next button.
    if (slick.slideCount === currentSlide + 1) {
    	$('.b-slider-calendar__arrow--right').hide();
    }
  });
});