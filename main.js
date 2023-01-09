document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#nav-menu-icon').addEventListener('click', () => toggleMobileMenu())
    document.querySelector('#mode-icon').addEventListener('click', () => toggleMode())
})

function toggleMobileMenu() {
    let closeURL = './static/assets/icons/close-menu-icon.svg'
    let openURL ='./static/assets/icons/menu-icon.svg'

    if ($("#nav-mobile-menu-container").css("display") === 'none') {
        $('#nav-menu-icon').fadeOut(200, function(){
            $(this).attr('src', closeURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(200);
            });
        });
    } else {
        $('#nav-menu-icon').fadeOut(200, function(){
            $(this).attr('src', openURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(200);
            });
        });
    }

    $('.nav-mobile-menu-container').slideToggle(300);
 
}

function toggleMode() {
    let lightURL = './static/assets/icons/light-mode.svg'
    let darkURL ='./static/assets/icons/dark-mode.svg'

    if ($('#mode-icon').attr('src') === darkURL) {
        $('#mode-icon').fadeOut(200, function(){
            $(this).attr('src', lightURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(200);
            });
        });
        darkMode = false
    } else {
        $('#mode-icon').fadeOut(200, function(){
            $(this).attr('src', darkURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(200);
            });
        });
        darkMode = true
    }

}