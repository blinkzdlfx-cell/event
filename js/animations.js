// GSAP Animations for Herkinx Events

gsap.registerPlugin(ScrollTrigger);

// Hero content animation
function initHeroAnimation() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    gsap.from(heroContent, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    });
  }
}

// Fade-up animations on scroll
function initScrollAnimations() {
  gsap.utils.toArray('.animate-fade-up, .animate-on-scroll').forEach((element, index) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      },
      delay: index * 0.05
    });
  });
}

// Text reveal animations
function initTextReveal() {
  gsap.utils.toArray('.text-reveal').forEach(element => {
    const text = element.textContent;
    element.innerHTML = `<span>${text.split(' ').join('</span> <span>')}</span>`;
    const spans = element.querySelectorAll('span');
    
    gsap.from(spans, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    });
  });
}

// Counter animations
function initCounters() {
  gsap.utils.toArray('.stat-number[data-count]').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'), 10);
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      onEnter: () => {
        gsap.to({ value: 0 }, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            counter.textContent = Math.floor(this.targets()[0].value).toLocaleString();
          },
          onComplete: () => {
            counter.textContent = target.toLocaleString();
          }
        });
      },
      once: true
    });
  });
}

// Parallax effect for hero backgrounds
function initParallax() {
  gsap.utils.toArray('.hero-bg').forEach(bg => {
    gsap.to(bg, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: bg.closest('.hero-section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}

// Card hover animations
function initCardAnimations() {
  gsap.utils.toArray('.service-card, .portfolio-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Page transition animation
function initPageTransition() {
  const transitionOverlay = document.createElement('div');
  transitionOverlay.className = 'page-transition';
  transitionOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999;
    transform: scaleY(0);
    transform-origin: bottom;
    pointer-events: none;
  `;
  document.body.appendChild(transitionOverlay);

  // Animate in on page load
  gsap.to(transitionOverlay, {
    scaleY: 1,
    duration: 0,
    ease: 'power3.inOut'
  });

  gsap.to(transitionOverlay, {
    scaleY: 0,
    transformOrigin: 'top',
    duration: 1,
    ease: 'power3.inOut',
    delay: 0.5
  });

  // Handle navigation links
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        gsap.to(transitionOverlay, {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 0.5,
          ease: 'power3.inOut',
          onComplete: () => {
            window.location.href = href;
          }
        });
      });
    }
  });
}

// Staggered list animations
function initStaggerLists() {
  gsap.utils.toArray('.stagger-list').forEach(list => {
    const items = list.querySelectorAll('li');
    gsap.from(items, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: list,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    });
  });
}

// Initialize all animations
function initAnimations() {
  initHeroAnimation();
  initScrollAnimations();
  initTextReveal();
  initCounters();
  initParallax();
  initCardAnimations();
  initPageTransition();
  initStaggerLists();

  // Refresh ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}