document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#nav-menu-icon').addEventListener('click', () => toggleMobileMenu())
    document.querySelector('#mode-icon').addEventListener('click', () => toggleMode())
})

function toggleMenuIcon () {
    let closeURL = './static/assets/icons/close-menu-icon.svg';
    let openURL ='./static/assets/icons/menu-icon.svg';

    if (($('.nav-mobile-menu-container').is(":visible"))) {
        $('#nav-menu-icon').fadeOut(100, function(){
            $(this).attr('src', closeURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(100);
            });
        });
    } else {
        $('#nav-menu-icon').fadeOut(100, function(){
            $(this).attr('src', openURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(100);
            });
        });
    };
};

function toggleMobileMenu() {
    
    $('.nav-mobile-menu-container').slideToggle(300);
    setTimeout(toggleMenuIcon,350);
    
};

$(window).resize(function() {
    if(window.innerWidth > 756) {
        
        if ($('.nav-mobile-menu-container').is(":visible")){
            $('.nav-mobile-menu-container').slideUp();
        }
        toggleMenuIcon();
    };
});

function toggleMode() {
    let lightURL = './static/assets/icons/light-mode.svg';
    let darkURL ='./static/assets/icons/dark-mode.svg';

    if ($('#mode-icon').attr('src') === darkURL) {
        $('#mode-icon').fadeOut(200, function(){
            $(this).attr('src', lightURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(200);
            });
        });
        darkMode = false;
    } else {
        $('#mode-icon').fadeOut(200, function(){
            $(this).attr('src', darkURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(200);
            });
        });
        darkMode = true;
    };
};