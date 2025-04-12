document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const fadeElements = document.querySelectorAll('.fade-in');
    const projectCards = document.querySelectorAll('.project-card');
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuToggle && navMenu) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }
    
    function handleHeaderScroll() {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }
    
    function checkFade() {
        if (fadeElements) {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
    
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }
        
        if (projectCards) {
            projectCards.forEach((card, index) => {
                const cardTop = card.getBoundingClientRect().top;
                const cardVisible = 150;
    
                if (cardTop < window.innerHeight - cardVisible) {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 100);
                }
            });
        }
    }
    
    function animateCounters() {
        const counters = document.querySelectorAll('.stats-number');
        
        if (counters) {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 Sekunden
                const step = Math.ceil(target / (duration / 30)); // 30 FPS
                let current = 0;
    
                const updateCounter = () => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = current;
                    }
                };
    
                const timer = setInterval(updateCounter, 30);
            });
        }
    }
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function checkAndAnimateCounters() {
        const statsSection = document.querySelector('.stats-grid');
        if (statsSection && isInViewport(statsSection)) {
            animateCounters();
            window.removeEventListener('scroll', checkAndAnimateCounters);
        }
    }
    
    function toggleBackToTopButton() {
        if (backToTopButton) {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
    }
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks) {
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
    
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
    
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Anpassung für Header-Höhe
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    function highlightCurrentNavItem() {
        const currentPath = window.location.pathname;
        if (navLinks) {
            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href');
                if (currentPath.endsWith(linkPath)) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    window.addEventListener('scroll', checkFade);
    window.addEventListener('scroll', checkAndAnimateCounters);
    window.addEventListener('scroll', toggleBackToTopButton);
    
    handleHeaderScroll();
    checkFade();
    checkAndAnimateCounters();
    toggleBackToTopButton();
    highlightCurrentNavItem();
});

document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    if (loaderWrapper) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          loaderWrapper.classList.add('hidden');
        }, 500);
      });
    }
  });

  function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrolled = (scrollPosition / totalScroll) * 100;
      
      scrollProgress.style.width = `${scrolled}%`;
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
  });