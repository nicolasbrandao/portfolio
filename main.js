document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#nav-menu-icon').addEventListener('click', () => toggleMobileMenu())
    document.querySelector('#mode-icon').addEventListener('click', () => toggleMode())
})

// Toggle menu icon based on mobile menu visibility
function toggleMenuIcon () {
    let closeURL = './static/assets/icons/mobile-menu/close-menu-icon.svg';
    let openURL ='./static/assets/icons/mobile-menu/menu-icon.svg';

    if (($('.nav-mobile-menu-container').is(':visible'))) {
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

// Toggle mobile menu visibility
function toggleMobileMenu() {
    $('.nav-mobile-menu-container').slideToggle(300);
    setTimeout(toggleMenuIcon,350);
};

// Toggle theme
function toggleMode() {
    let lightURL = './static/assets/icons/theme/light-mode.svg';
    let darkURL ='./static/assets/icons/theme/dark-mode.svg';

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

// Slide mobile menu up if window is resized
$(window).resize(function() {
    if(window.innerWidth > 756) {
        
        if ($('.nav-mobile-menu-container').is(":visible")){
            $('.nav-mobile-menu-container').slideUp();
        }
        toggleMenuIcon();
    };
});

// Slide navbar up if window scrolls-down
var lastScrollTop = 0;
$(window).scroll(function(event){
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop){
        $('.navbar').slideUp();
        if ($('.nav-mobile-menu-container').is(":visible")){
            $('.nav-mobile-menu-container').slideUp();
            setTimeout(toggleMenuIcon,300);
        }
    } else {
        $('.navbar').slideDown();
    }
    lastScrollTop = scrollTop;
 });

