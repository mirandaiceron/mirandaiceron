document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');
  const video = document.querySelector('.hero-video');

  // Scroll effects
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header fade to solid
    if (header) {
      if (scrollY > 80) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    }

    // Hero text animation
    if (heroText) {
      heroText.style.transform = `translateY(${scrollY * 0.15}px)`;
      heroText.style.opacity = `${1 - scrollY / 400}`;
    }
  });

  // Video autoplay nudge
  if (video) {
    video.muted = true;
    video.play().catch(() => {
      // autoplay blocked — safe fallback
    });
  }
});
