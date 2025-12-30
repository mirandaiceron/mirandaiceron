document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');
  const video = document.querySelector('.hero-video');

  let videoStarted = false;

  // Force initial state
  header.classList.remove('is-solid');
  if (heroText) {
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    /* HEADER: turn black only after scroll */
    if (scrollY > 80) {
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }

    /* HERO TEXT: subtle fade */
    if (heroText) {
      heroText.style.opacity = Math.max(1 - scrollY / 500, 0);
      heroText.style.transform = `translateY(${scrollY * 0.08}px)`;
    }

    /* VIDEO: start on first scroll (Safari-safe) */
    if (!videoStarted && video) {
      video.play().catch(() => {});
      videoStarted = true;
    }
  });
});


