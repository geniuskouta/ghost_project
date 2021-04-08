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
        fadeOpenMenu();
        overlay.addEventListener('click', closeMenu);
        Array.prototype.forEach.call(closeTriggers, function(closeTrigger) {
            closeTrigger.addEventListener('click', closeMenu);
        });
    }

    function closeMenu() {
        fadeCloseMenu();
        overlay.removeEventListener('click', closeMenu);
        Array.prototype.forEach.call(closeTriggers, function(closeTrigger) {
            closeTrigger.removeEventListener('click', closeMenu);
        });
    }

    function fadeOpenMenu() {
        nav.style.opacity = 0;
        overlay.style.opacity = 0;
        nav.classList.add(styles.navShown);
        overlay.classList.add(styles.overlayShown);
        setTimeout(function() {
            nav.style.opacity = "";
            overlay.style.opacity = "";
        }, 100);
    }

    function fadeCloseMenu() {
        nav.style.opacity = 0;
        overlay.style.opacity = 0;
        setTimeout(function() {
            nav.classList.remove(styles.navShown);
            overlay.classList.remove(styles.overlayShown);
            overlay.style.opacity = "";
            nav.style.opacity = "";
        }, 300);
    }
}
