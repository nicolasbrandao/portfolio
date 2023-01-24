document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#nav-menu-icon').addEventListener('click', () => toggleMobileMenu())
    document.querySelector('#mode-icon').addEventListener('click', () => toggleTheme())

    // Set initial theme to 'dark'
    document.documentElement.className = 'dark';

    // Slide navbar on scroll
    slideNavbarUp();

    // Pre-loader animation
    preLoaderAnimation();

    // Remove navbar shadow if scrollTop === 0
    removeNavbarShadow();

    // Animate on scroll
    showElementsOnScroll();

    // Slide mobile menu up if window is resized
    slideOnResize();

    // Fetch github repository stats
    getGithubStats();
})

// Show elements on scroll
function showElementsOnScroll () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('shown');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
};

// Remove navbar box-shadow if scrollTop === 0
function removeNavbarShadow () {
    $(window).scroll(function(event) {
        if ($(this).scrollTop() === 0){
            $('nav').css('box-shadow', 'none');
        } else {
            $('nav').css('box-shadow', '0 3px 8px 8px var(--dark-shadow)');
        }
    })
};

// Pre-loader animation
function preLoaderAnimation () {
    const preloaderTime = 2000;
    $(window).on('load', function(){
        $('body').css('overflow', 'hidden');
        setTimeout(removeLoader, preloaderTime);
        setTimeout(() => $('body').css('overflow', 'overlay'), preloaderTime);
    });
};

// Remove pre-loader
function removeLoader(){
    $('.loader-wrapper').fadeOut(500, function() {
        $('.loader-wrapper').remove();
    });   
};

// Slide navbar up if window scrolls-down
function slideNavbarUp () {
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
};

// Toggle menu icon based on mobile menu visibility
function toggleMenuIcon () {
    let closeURL = './static/assets/icons/mobile-menu/close-menu-icon.svg';
    let openURL ='./static/assets/icons/mobile-menu/menu-icon.svg';

    if (($('.nav-mobile-menu-container').is(':visible'))) {
        $('#nav-menu-icon').fadeOut(300, function(){
            $(this).attr('src', closeURL).bind('onreadystatechange load', function(){
               if (this.complete) { $(this).fadeIn(300) };
            });
        });
    } else {
        $('#nav-menu-icon').fadeOut(300, function(){
            $(this).attr('src', openURL).bind('onreadystatechange load', function(){
               if (this.complete) { $(this).fadeIn(300) };
            });
        });
    };
};

// Toggle mobile menu visibility
function toggleMobileMenu() {
    $('.nav-mobile-menu-container').slideToggle(300);
    setTimeout(toggleMenuIcon,350);
};

// Toggle theme icon
function toggleThemeIcon() {
    let lightURL = './static/assets/icons/theme/light-mode.svg';
    let darkURL ='./static/assets/icons/theme/dark-mode.svg';

    if ($('#mode-icon').attr('src') === darkURL) {
        $('#mode-icon').fadeOut(300, function(){
            $(this).attr('src', lightURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(300);
            });
        });
    } else {
        $('#mode-icon').fadeOut(300, function(){
            $(this).attr('src', darkURL).bind('onreadystatechange load', function(){
               if (this.complete) $(this).fadeIn(300);
            });
        });
    };
}

// Toggle Theme
function toggleTheme() {
    let currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        document.documentElement.className = 'light';
    } else {
        document.documentElement.className = 'dark';
    }

    toggleThemeIcon();
};

// Slide mobile menu up if window is resized
function slideOnResize() {
    $(window).resize(function() {
        if(window.innerWidth > 756) {
            
            if ($('.nav-mobile-menu-container').is(":visible")){
                $('.nav-mobile-menu-container').slideUp();
            }
            toggleMenuIcon();
        };
    });
};

// Fetch github repository stats for footer
function getGithubStats () {
    const url = 'https://api.github.com/repos/nicolasbrandao/portfolio';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('github-stars').innerHTML = data.stargazers_count;
            document.getElementById('github-forks').innerHTML = data.forks;
        });
};