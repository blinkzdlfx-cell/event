// GSAP Animations for Herkinx Events

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

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
      delay: (index % 10) * 0.05
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
  gsap.utils.toArray('.counter[data-target]').forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      onEnter: () => {
        gsap.to({ value: 0 }, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            const val = this.targets()[0].value;
            counter.textContent = Number.isInteger(target) ? Math.floor(val).toLocaleString() : val.toFixed(1);
          },
          onComplete: () => {
            counter.textContent = Number.isInteger(target) ? target.toLocaleString() : target.toFixed(1);
          }
        });
      },
      once: true
    });
  });
}

// Card hover animations
function initCardAnimations() {
  gsap.utils.toArray('.portfolio-item').forEach(card => {
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
        const href = link.getAttribute('href');
        // Preserve hash fragments
        const hash = link.hash;
        
        e.preventDefault();
        
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

// Initialize all animations
function initAnimations() {
  initHeroAnimation();
  initScrollAnimations();
  initTextReveal();
  initCounters();
  initCardAnimations();
  initPageTransition();

  // Refresh ScrollTrigger on resize (debounced)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

} // end GSAP check
