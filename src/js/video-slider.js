$(document).ready(function(){
  $('.b-video__slider-thumbs').slick({
    variableWidth: true,
    centerPadding: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    centerMode: false,
    adaptiveHeight: true,
    infinite: false,
    arrows: true,
    prevArrow: '.b-video__slider-thumbs__arrow--left',
    nextArrow: '.b-video__slider-thumbs__arrow--right',
    responsive: [
        {
            breakpoint: 1441,
            settings: {
                variableWidth: true,
                centerPadding: false,
                slidesToShow: 4,
                slidesToScroll: 3,
                arrows: true,
                prevArrow: '.b-video__slider-thumbs__arrow--left',
                nextArrow: '.b-video__slider-thumbs__arrow--right'
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

