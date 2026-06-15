document.addEventListener('DOMContentLoaded', function () {

    // Fade-In Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Bootstrap Navbar
    const navCollapse = document.getElementById('navbarNav');

if (navCollapse) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse, {
        toggle: false
    });

    document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });
}

    // Close menu on dropdown item click
    document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });

    // Active Nav Highlight
    const sections = document.querySelectorAll('[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 100) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

});