registerToggleSpMenu();
function registerToggleSpMenu() {
    var styles = {
        navShown: 'campaign-header-nav-shown',
        overlayShown: 'campaign-menu-overlay-shown'
    }

    var menuIcon = document.querySelector('[campaign-menu-open]');
    var nav = document.querySelector('[campaign-header-nav]');
    var overlay = document.querySelector('[campaign-menu-overlay]');
    var closeTriggers = document.querySelectorAll('[campaign-menu-close]');
    menuIcon.addEventListener('click', openMenu);

    function openMenu() {
        disableScroll();
        slideOpenMenu();
        overlay.addEventListener('click', closeMenu);
        Array.prototype.forEach.call(closeTriggers, function(closeTrigger) {
            closeTrigger.addEventListener('click', closeMenu);
        });
    }

    function closeMenu() {
        enableScroll();
        slideCloseMenu();
        overlay.removeEventListener('click', closeMenu);
        Array.prototype.forEach.call(closeTriggers, function(closeTrigger) {
            closeTrigger.removeEventListener('click', closeMenu);
        });
    }

    function slideOpenMenu() {
        // slide animation defined in CSS
        overlay.style.opacity = 0;
        overlay.classList.add(styles.overlayShown);
        nav.style.display = "block";
        setTimeout(function() {
            overlay.style.opacity = "";
            nav.classList.add(styles.navShown);
        }, 100);
    }

    function slideCloseMenu() {
        // slide animation defined in CSS
        overlay.style.opacity = 0;
        nav.classList.remove(styles.navShown);
        setTimeout(function() {
            overlay.classList.remove(styles.overlayShown);
            overlay.style.opacity = "";
            nav.style.display = "";
        }, 100);
    }

    // function fadeOpenMenu() {
    //     nav.style.opacity = 0;
    //     overlay.style.opacity = 0;
    //     nav.classList.add(styles.navShown);
    //     overlay.classList.add(styles.overlayShown);
    //     setTimeout(function() {
    //         nav.style.opacity = "";
    //         overlay.style.opacity = "";
    //     }, 100);
    // }

    // function fadeCloseMenu() {
    //     nav.style.opacity = 0;
    //     overlay.style.opacity = 0;
    //     setTimeout(function() {
    //         nav.classList.remove(styles.navShown);
    //         overlay.classList.remove(styles.overlayShown);
    //         overlay.style.opacity = "";
    //         nav.style.opacity = "";
    //     }, 300);
    // }

    function disableScroll() {
          var body = document.querySelector('body');
          body.style.height = '100vh';
          body.style.overflow = 'hidden';
    }

    function enableScroll() {
        var body = document.querySelector('body');
        body.style.height = '';
        body.style.overflow = '';
    }
}
