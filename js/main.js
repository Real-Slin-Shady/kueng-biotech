// =====================================================
// KÜNG BIOTECH & UMWELT - MAIN JAVASCRIPT
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initScrollEffects();
    initFormValidation();
});

// =====================================================
// MOBILE MENU TOGGLE
// =====================================================

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function() {
        const navList = navMenu.querySelector('.nav-list');
        navList.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navList = navMenu.querySelector('.nav-list');
            navList.classList.remove('active');
        });
    });
}

// =====================================================
// SCROLL EFFECTS & ANIMATIONS
// =====================================================

function initScrollEffects() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all service cards
    const cards = document.querySelectorAll('.service-card, .content-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
}

// =====================================================
// FORM VALIDATION
// =====================================================

function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Submit form
                console.log('Form submitted:', form.name || 'unnamed form');
                // In a real scenario, you would send this data to a server
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }
        });
    });
}

// =====================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Format date function
function formatDate(date) {
    return new Date(date).toLocaleDateString('de-CH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
