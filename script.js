// Mobile menu toggle
const menuToggle = document.querySelector('.nav-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

// Sticky header shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll reveal for cards
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.box').forEach((box) => observer.observe(box));

// Back to top
const backToTop = document.querySelector('.foot-panel1');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Search button feedback
const searchBtn = document.querySelector('.nav-search button');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchBtn.textContent = 'SEARCHING...';
        setTimeout(() => {
            searchBtn.textContent = 'SEARCH';
        }, 1500);
    });
}
