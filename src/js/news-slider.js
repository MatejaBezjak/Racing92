$(document).ready(function(){
    var sliderNews = $('.b-news__slider-wrapper').slick({
        variableWidth: true,
        centerPadding: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        centerMode: false,
        adaptiveHeight: true,
        infinite: false,
        arrows: true,
        prevArrow: '.b-news__arrow--left',
        nextArrow: '.b-news__arrow--right',
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    variableWidth: true,
                    centerPadding: false,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    arrows: true,
                    prevArrow: '.b-news__arrow--left',
                    nextArrow: '.b-news__arrow--right'
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

    $('.b-news__arrow--left').hide();

    sliderNews.on('afterChange', function(event, slick, currentSlide) {  	
            

            if (currentSlide === 0) {
                $('.b-news__arrow--left').hide();
                $('.b-news__arrow--right').show();
              }
              else {
                  $('.b-news__arrow--left').show();
              }
              
              if (slick.slideCount === currentSlide + 1) {
                  $('.b-news__arrow--right').hide();
              }

              
  });

  
});
