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
        menuItem.on('click', function(e){
            $('.b-header__navigation-list').css('right', '50%');
            $('.b-header__navigation-list__item').css('width', '57.7rem');
            $(this).find('.b-header__submenu').css({'display' : 'block', 'left' : '50%'});
            e.preventDefault();
            console.log('mob-sub');
            
        });

        var submenuItem = $('.b-header__submenu-list__item');
        // var submenuItemSub = $('.b-header__submenu-list__item-sub');

        submenuItem.on('click', function(e){
            e.preventDefault();
            if(submenuItem.hasClass('.b-header__submenu-list__item--sub')){
                $(this).find('.b-header__submenu-sub').css({'display' : 'block', 'left' : '50%'});
                $('.b-header__submenu-list__item').css('width', '57.7rem');
                $('.b-header__submenu-list').css('right', '50%');
            }
            // console.log('mob-sub');
            
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