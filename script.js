// Toggle mobile nav menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.add('nav-active');
});
const closeBtn = document.getElementById('close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
}
// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('nav-active');
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
// Back to Top Button functionality
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Theme Toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
// Set initial theme to light mode
document.documentElement.setAttribute('data-theme', 'light');