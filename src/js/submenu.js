console.log('holaaaaaaaas!');

$(document).ready(function(){
    if($(window).width() < 768){
        
        $('.b-header__burger').on('click', function(){
            $('.b-header').toggleClass('active');

            console.log('mob');
            
        });
        // $('#actualite').on('click', function(){

        //     $('.b-header__navigation-list').addClass('.active-sub');
        //     $('.b-header__submenu').addClass('.active-sub');

        //     console.log('mob');
            
        // // });
        var menuItem = $('.b-header__navigation-list__item');
        menuItem.on('click', function(){
            $('.b-header__navigation-list').animate('right', '50%');
            $(this).find('.b-header__submenu').css({'display' : 'block', 'left' : '50%'});
            e.preventDefault();
            console.log('mob-sub');
            
        });
    }
    if($(window).width() >= 768){

        var item = $('.b-header__navigation-list__item');
        item.on('mouseover', function(){

            $(this).find('.b-header__submenu').css('display', 'block');

            console.log('desk');
            
        });
        item.on('mouseout', function(){

            $(this).find('.b-header__submenu').css({'display' : 'none', 'transition' : 'all .3s ease'});

            console.log('desk');
            
        });
    }
    
});