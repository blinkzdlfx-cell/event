// Portfolio Filtering for Herkinx Events

if (typeof gsap !== 'undefined') {

function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-button');
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
          gsap.fromTo(item,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: index * 0.05,
              ease: 'power2.out',
            }
          );
        } else {
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

    const remainingHidden = document.querySelectorAll('.portfolio-item.hidden');
    if (remainingHidden.length === 0) {
      loadMoreBtn.style.display = 'none';
    }
  });
}

// Initialize all portfolio functionality
function initPortfolio() {
  initPortfolioFilter();
  initLoadMore();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}

} // end GSAP check
