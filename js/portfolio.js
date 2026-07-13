// Portfolio Filtering for Herkinx Events

function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (!filterButtons.length || !portfolioItems.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items with animation
      portfolioItems.forEach((item, index) => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          // Animate in
          gsap.fromTo(item,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: index * 0.05,
              ease: 'power2.out',
              clearProps: 'all'
            }
          );
        } else {
          // Animate out
          gsap.to(item, {
            opacity: 0,
            y: -20,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
              item.style.display = 'none';
            }
          });
        }
      });
    });
  });
}

// Lightbox for portfolio images
function initPortfolioLightbox() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const lightbox = document.getElementById('portfolio-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (!lightbox || !portfolioItems.length) return;

  let currentIndex = 0;
  const items = Array.from(portfolioItems);

  portfolioItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      openLightbox(item);
    });
  });

  function openLightbox(item) {
    const img = item.querySelector('img');
    if (!img) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    const img = items[currentIndex].querySelector('img');
    if (img) {
      gsap.to(lightboxImg, { opacity: 0, duration: 0.2, onComplete: () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        gsap.to(lightboxImg, { opacity: 1, duration: 0.2 });
      }});
    }
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => navigate(-1));
  lightboxNext.addEventListener('click', () => navigate(1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Load more functionality
function initLoadMore() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  const hiddenItems = document.querySelectorAll('.portfolio-item.hidden');

  if (!loadMoreBtn || !hiddenItems.length) return;

  loadMoreBtn.addEventListener('click', () => {
    const itemsToShow = Array.from(hiddenItems).slice(0, 6);
    
    itemsToShow.forEach((item, index) => {
      item.classList.remove('hidden');
      item.style.display = 'block';
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: index * 0.05,
        ease: 'power2.out'
      });
    });

    // Hide button if no more hidden items
    const remainingHidden = document.querySelectorAll('.portfolio-item.hidden');
    if (remainingHidden.length === 0) {
      loadMoreBtn.style.display = 'none';
    }
  });
}

// Initialize all portfolio functionality
function initPortfolio() {
  initPortfolioFilter();
  initPortfolioLightbox();
  initLoadMore();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}