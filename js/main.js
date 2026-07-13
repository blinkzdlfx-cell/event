// Main JavaScript for Herkinx Events

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Header scroll effect
  const header = document.querySelector('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Set min date for date inputs to today
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInputs.forEach(input => {
    input.setAttribute('min', today);
  });

  // Form validation and submission
  const forms = document.querySelectorAll('form[data-form]');

  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });

  async function handleFormSubmit(e) {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll('.form-input.error').forEach(input => {
      input.classList.remove('error');
    });

    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    let hasError = false;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        hasError = true;
      }
    });

    if (hasError) {
      // Focus first error field
      const firstError = form.querySelector('.form-input.error');
      if (firstError) firstError.focus();
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success modal
    showSuccessModal();

    // Reset form
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }

  // Success modal
  function showSuccessModal() {
    const overlay = document.getElementById('success-overlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  // Close success modal
  const closeModalBtn = document.getElementById('close-modal');
  const successOverlay = document.getElementById('success-overlay');

  if (closeModalBtn && successOverlay) {
    closeModalBtn.addEventListener('click', closeSuccessModal);
    successOverlay.addEventListener('click', (e) => {
      if (e.target === successOverlay) closeSuccessModal();
    });
  }

  function closeSuccessModal() {
    if (successOverlay) {
      successOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successOverlay?.classList.contains('open')) {
      closeSuccessModal();
    }
  });

  // Smooth scroll for anchor links
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

  // Intersection Observer for fade-up animations (fallback for non-GSAP)
  if (!window.gsap) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-up, .animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }
});

// Utility functions
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

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}