$(document).ready(function(){
  $('.b-video__slider-thumbs').slick({
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



// $(document).ready(function(){
//     $('.b-video__slider-top').slick({
//       slidesToShow: 1,
//       draggable: false,
//       infinite: false,  
//       arrows: false,
//       // asNavFor: '.b-video__slider-thumbs',
//       // focusOnSelect: true
//     });
//     $('.b-video__slider-thumbs').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,   
//       asNavFor: '.b-video__slider-top',
//       focusOnSelect: false,
//       dots: false,
//       centerMode: false
//     });
// });  


// $('.b-video__slider-thumbs__slide-icon').click(function(e) {
//     e.preventDefault();
//     var select = $(this).data('.b-video__slider-thumbs__slide');
//     $('.b-video__slider-top__slide').slick('slickGoTo', select);
//   });

// $('.b-video__slider-thumbs__slide-icon').click(function(event) {
  
//   $('.b-video__slider-top').slick('slickGoTo', $(this).data('.b-video__slider-thumbs__slide'));
// });