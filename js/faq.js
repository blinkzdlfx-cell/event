// FAQ Accordion and Search for Herkinx Events

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  const categoryButtons = document.querySelectorAll('.faq-category');
  const searchInput = document.getElementById('faq-search');
  const noResults = document.getElementById('no-results');

  // Accordion functionality
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.toggle('active');
        answer.classList.toggle('open', isOpen);
        question.setAttribute('aria-expanded', isOpen);
      });
    }
  });

  // Category filtering
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      // Update active button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items
      faqItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || category === itemCategory) {
          item.style.display = 'block';
          gsap.from(item, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(item, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
            item.style.display = 'none';
          }});
        }
      });

      // Clear search when changing category
      if (searchInput) searchInput.value = '';
      updateNoResults();
    });
  });

  // Search functionality
  if (searchInput) {
    let searchDebounce;

    searchInput.addEventListener('input', () => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        const query = searchInput.value.toLowerCase().trim();
        
        faqItems.forEach(item => {
          const question = item.querySelector('.faq-question');
          const answer = item.querySelector('.faq-answer');
          const text = (question?.textContent + ' ' + answer?.textContent).toLowerCase();

          if (query === '' || text.includes(query)) {
            item.style.display = 'block';
            gsap.from(item, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out' });
            // Highlight matches
            highlightText(item, query);
          } else {
            gsap.to(item, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
              item.style.display = 'none';
            }});
          }
        });

        updateNoResults(query);
      }, 200);
    });
  }

  function updateNoResults(query = '') {
    if (!noResults) return;

    const visibleItems = Array.from(faqItems).filter(item => item.style.display !== 'none');
    const hasVisibleItems = visibleItems.length > 0;

    if (!hasVisibleItems && (query || document.querySelector('.faq-category.active')?.getAttribute('data-category') !== 'all')) {
      noResults.style.display = 'block';
      gsap.from(noResults, { opacity: 0, y: 20, duration: 0.3 });
    } else {
      noResults.style.display = 'none';
    }
  }

  function highlightText(item, query) {
    if (!query) {
      // Remove existing highlights
      item.querySelectorAll('.highlight').forEach(el => {
        el.outerHTML = el.textContent;
      });
      return;
    }

    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    [question, answer].forEach(el => {
      if (!el) return;
      const text = el.textContent;
      const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
      const highlighted = text.replace(regex, '<mark class="highlight">$1</mark>');
      if (highlighted !== text) {
        el.innerHTML = highlighted;
      }
    });
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Keyboard navigation for accordion
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFAQ);
} else {
  initFAQ();
}