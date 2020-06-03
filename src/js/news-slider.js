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
        // rows: 0,
        // rtl: true,
        arrows: true,
        prevArrow: '.b-news__arrow--left',
        nextArrow: '.b-news__arrow--right',
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    variableWidth: true,
                    centerPadding: false,
                    // rows: 0,
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
    // $('.b-news__arrow--right').hide();


    // $('.b-news__slider-wrapper').on('mouseover', function(){
    //     console.log('proba3');
    //     if (currentSlide === 0) {
    //         $('.b-news__arrow--left').hide();
    //         $('.b-news__arrow--right').show();
    //       }
    //       else {
    //           $('.b-news__arrow--left').show();
    //       }
          
    //       if (slick.slideCount === currentSlide + 1) {
    //           $('.b-news__arrow--right').hide();
    //       }

    // });

    sliderNews.on('afterChange', function(event, slick, currentSlide) {  	
            console.log(currentSlide);

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

// $('.b-news__slider-wrapper').on('mouseover', function(){
//     console.log('show');
// $('.b-news__arrow--left').show();
// $('.b-news__arrow--right').show();

// });

// $('.b-news__slider-wrapper').on('mouseout', function(){
// console.log('hide');
// $('.b-news__arrow--left').hide();
// $('.b-news__arrow--right').hide();

// });

// $(document).ready(function(){
//     $('.b-news__arrow').hide();
//     $('.b-news__slider').on('mouseover', function(){
//         $('.b-news__arrow').show();
//     });
//     $('.b-news__slider').on('mouseout', function(){
//         $('.b-news__arrow').hide();
//     });

//     $('.b-news__arrow--right').on('click', function(){
//         var currentSlides = $('.b-news__slider-wrapper .slick-list').width();
//         var current = 0;
//         console.log('clicked');
//         if(current >= 0){
//             $('.b-news__slider-wrapper .slick-list').animate({
//                 scrollLeft: currentSlides + 100
//             });
//         }
//     });
    
    
// });