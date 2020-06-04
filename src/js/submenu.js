$(document).ready(function(){
    if($(window).width() < 768){
        
        $('.b-header__burger').on('click', function(){
            $('.b-header').toggleClass('active');

            
        });
        var menuItem = $('.b-header__navigation-list__item');
        menuItem.on('click', function(e){
            $('.b-header__navigation-list').css('right', '50%');
            $('.b-header__navigation-list__item').css('width', '57.7rem');
            $(this).find('.b-header__submenu').css({'display' : 'block', 'left' : '50%'});
            e.preventDefault();
            
        });

        var submenuItem = $('.b-header__submenu-list__item');

        submenuItem.on('click', function(e){
            if(submenuItem.hasClass('.b-header__submenu-list__item--sub')){
            e.preventDefault();

                $('.b-header__submenu-list__item').css('width', '0');
                $('.b-header__navigation-list').css('left', '-50%');
                $('.b-header__submenu-list').css('right', '50%');
                $(this).find('.b-header__submenu-sub').css({'display' : 'block'});
            }
            
            
        });

    }
    if($(window).width() >= 768){

        var item = $('.b-header__navigation-list__item');
        item.on('mouseover', function(){

            $(this).find('.b-header__submenu').css('display', 'block');

            
        });
        item.on('mouseout', function(){

            $(this).find('.b-header__submenu').css({'display' : 'none', 'transition' : 'all .3s ease'});

            
        });
    }
    
});