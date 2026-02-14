/*==================== GOD MODE JAVASCRIPT - EXTREME EDITION ====================*/

/*==================== LOADING SCREEN ====================*/
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }
});

/*==================== TOGGLE ICON NAVBAR ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    /*==================== STICKY NAVBAR ====================*/
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    /*==================== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) ====================*/
    if (menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/*==================== SCROLL REVEAL ANIMATIONS ====================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .certificates', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.services-box', { 
    origin: 'bottom', 
    interval: 100,
    distance: '50px'
});

/*==================== TYPED JS ====================*/
const typed = new Typed('.multiple-text', {
    strings: [
        'Certified Ethical Hacker',
        'Bug Hunter',
        'Red Teamer',
        'CTF Player',
        'Cyber Security Specialist',
        'Penetration Tester',
        'Malware Analyst'
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    cursorChar: '|',
    smartBackspace: true
});

/*==================== PARTICLES.JS CONFIGURATION ====================*/
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#00f0ff', '#b44aff', '#ff2d75', '#4d7cff']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.4,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.5,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00f0ff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

/*==================== TILT EFFECT ON CARDS ====================*/
const tiltCards = document.querySelectorAll('.services-box');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});

/*==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================*/
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.services-box, .certificates a').forEach(el => {
    animateOnScroll.observe(el);
});

/*==================== MAGNETIC BUTTON EFFECT ====================*/
const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

/*==================== GLITCH TEXT EFFECT ON HOVER ====================*/
const glitchText = document.querySelector('.logo');
if (glitchText) {
    glitchText.addEventListener('mouseenter', () => {
        glitchText.classList.add('glitch');
    });
    
    glitchText.addEventListener('mouseleave', () => {
        glitchText.classList.remove('glitch');
    });
}

/*==================== CUSTOM CURSOR TRAIL ====================*/
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animate = () => {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animate);
    };
    
    animate();
};

// Initialize cursor trail on desktop only
if (window.innerWidth > 768) {
    createCursorTrail();
    
    // Add cursor trail styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .cursor-trail {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s;
        }
        
        .cursor-trail.active {
            width: 40px;
            height: 40px;
        }
    `;
    document.head.appendChild(style);
}

/*==================== PARALLAX EFFECT ON SCROLL ====================*/
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home-img img');
    
    parallaxElements.forEach(el => {
        const speed = 0.2;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

/*==================== ANIMATE NUMBERS/COUNTERS ====================*/
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

/*==================== DYNAMIC YEAR IN FOOTER ====================*/
const footerYear = document.querySelector('.footer-text p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace(/\d{4}/, currentYear);
}

/*==================== FORM VALIDATION ENHANCEMENT ====================*/
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

/*==================== RIPPLE EFFECT ON BUTTONS ====================*/
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        
        ripple.className = 'ripple';
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

/*==================== CONSOLE EASTER EGG ====================*/
console.log('%c🔐 Welcome, Hacker!', 'color: #00f0ff; font-size: 24px; font-weight: bold;');
console.log('%cThinking of inspecting my code? Go ahead, it\'s well-documented! 😎', 'color: #b44aff; font-size: 14px;');
console.log('%c— Nour Alhouseini | Ethical Hacker', 'color: #ff2d75; font-size: 12px; font-style: italic;');