$(document).ready(function(){
    var sliderCalendar = $('.b-slider-calendar').slick({
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        adaptiveHeight: true,
        infinite: false,
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

    if (currentSlide === 0) {
      $('.b-slider-calendar__arrow--left').hide();
      $('.b-slider-calendar__arrow--right').show();
    }
    else {
    	$('.b-slider-calendar__arrow--left').show();
    }
    
    if (slick.slideCount === currentSlide + 1) {
    	$('.b-slider-calendar__arrow--right').hide();
    }
  });
});