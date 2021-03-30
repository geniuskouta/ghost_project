registerToggleHeaderMenu();

function registerToggleHeaderMenu() {
    var menuButton = document.querySelector('[data-e_click="header-menu-button"]');
    menuButton.addEventListener('click', toggleHeaderMenu);

    function toggleHeaderMenu(e) {
        var styles = {
            hidden: 'common-header-menu-items-hidden'
        }
        var menu = document.querySelector('[data-p_header-menu]');
        console.log(menu);
        var hidden = menu.getAttribute('data-p_header-menu') === 'hidden' ? true : false;
        if(hidden) {
            menu.classList.remove(styles.hidden);
            menu.setAttribute('data-p_header-menu', 'shown');
            window.addEventListener('click', closeMenu);
        } else {
            closeMenu();
        }

        function openMenu() {
            console.log('dasda');
            menu.classList.remove(styles.hidden);
            menu.setAttribute('data-p_header-menu', 'shown');
            window.addEventListener('click', closeMenu);
        }

        function closeMenu() {
            menu.classList.add(styles.hidden);
            menu.setAttribute('data-p_header-menu', 'hidden');
            window.removeEventListener('click', closeMenu);
        }
    }
}