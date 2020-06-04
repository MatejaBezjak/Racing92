$(document).ready(function(){
    $('.b-shop__slider').slick({
      variableWidth: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerMode: false,
      adaptiveHeight: true,
      infinite: true,
      arrows: true,
      prevArrows: '.b-shop__arrow--left',
      nextArrow: '.b-shop__arrow--right',
      responsive: [
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