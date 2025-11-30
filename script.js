
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.getElementById('nav-list').style.display = 'none';
        }
    });
});

// Adjust menu for window resize
window.addEventListener('resize', function() {
    const navList = document.getElementById('nav-list');
    if (window.innerWidth > 768) {
        navList.style.display = 'flex';
    } else {
        navList.style.display = 'none';
    }
});
/* Add this JavaScript to your existing script */
document.addEventListener('DOMContentLoaded', function() {
// Intersection Observer for animations
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
});
}, {
threshold: 0.1
});

sections.forEach(section => {
section.classList.add('section-animate');
observer.observe(section);
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '↑';
backToTopButton.title = 'Back to Top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
} else {
    backToTopButton.classList.remove('visible');
}
});

backToTopButton.addEventListener('click', function() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
});