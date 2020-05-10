$(document).ready(function(){
    $('.b-shop__slider').slick({
      variableWidth: true,
    //   centerPadding: false,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerMode: false,
      adaptiveHeight: true,
      infinite: true,
      // rows: 0,
      arrows: false,
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