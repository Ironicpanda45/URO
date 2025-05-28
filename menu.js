document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.getElementById('mobileNavLinks');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.toggle('active');
        mobileNavLinks.classList.toggle('active');
        nav.classList.toggle('mobile-menu-active');
        document.body.classList.toggle('menu-open');

        if (!mobileNavLinks.classList.contains('active')) {
            document.querySelectorAll('.mobile-dropdown, .mobile-submenu').forEach(item => {
                item.classList.remove('active');
            });
            nav.classList.remove('mobile-menu-active');
            document.body.classList.remove('menu-open');
        }
    });

    document.addEventListener('click', function (e) {
        const clickedInsideMenu = e.target.closest('.nav-container') || e.target.closest('.mobile-nav-links');
        const clickedInsideFilter = e.target.closest('.filter-group');

        if (!clickedInsideMenu && !clickedInsideFilter) {
            hamburgerMenu.classList.remove('active');
            mobileNavLinks.classList.remove('active');
            nav.classList.remove('mobile-menu-active');
            document.body.classList.remove('menu-open');

            document.querySelectorAll('.mobile-dropdown, .mobile-submenu').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector('.filter-dropdown')?.classList.remove('active');
        }
    });

    document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');

            document.querySelectorAll('.mobile-dropdown').forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove('active');
                }
            });
        });
    });

    document.querySelectorAll('.mobile-submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const submenu = this.parentElement;
            submenu.classList.toggle('active');
        });
    });

    document.querySelectorAll('.mobile-nav-links a:not(.mobile-dropdown-toggle, .mobile-submenu-toggle)').forEach(link => {
        link.addEventListener('click', function () {
            hamburgerMenu.classList.remove('active');
            mobileNavLinks.classList.remove('active');
            document.querySelectorAll('.mobile-dropdown, .mobile-submenu').forEach(item => {
                item.classList.remove('active');
            });
        });
    });
    

    function handleResize() {
        if (window.innerWidth > 1024) {
            hamburgerMenu.classList.remove('active');
            mobileNavLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.querySelectorAll('.mobile-dropdown, .mobile-submenu').forEach(item => {
                item.classList.remove('active');
            });
        }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
});
