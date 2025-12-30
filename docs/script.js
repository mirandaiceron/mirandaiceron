document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');
  const video = document.querySelector('.hero-video');

  let videoStarted = false;

  const startVideo = () => {
    if (!videoStarted && video) {
      video.play().catch(() => {});
      videoStarted = true;
    }
  };

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    /* HEADER: appears only after scroll */
    if (scrollY > 80) {
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }

    /* HERO TEXT: subtle fade + movement */
    if (heroText) {
      heroText.style.opacity = Math.max(1 - scrollY / 400, 0);
      heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
    }

    /* VIDEO: start on first scroll (Safari fix) */
    startVideo();
  });

  /* Fallback: start video on first click */
  window.addEventListener('click', startVideo, { once: true });
});



