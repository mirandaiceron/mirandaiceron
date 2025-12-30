document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');
  const video = document.querySelector('.hero-video');

  /* HEADER + TEXT SCROLL */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      scrollY > 80
        ? header.classList.add('is-solid')
        : header.classList.remove('is-solid');
    }

    if (heroText) {
      heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroText.style.opacity = `${1 - scrollY / 450}`;
    }
  });

  /* VIDEO: PLAY ON FIRST REAL USER INPUT */
  if (!video) return;

  video.muted = true;
  video.setAttribute('muted', '');
  video.playsInline = true;

  let started = false;

  const startVideo = () => {
    if (started) return;
    video.play().then(() => {
      started = true;
    }).catch(() => {});
  };

  // REAL Safari gestures
  window.addEventListener('wheel', startVideo, { once: true });
  window.addEventListener('touchmove', startVideo, { once: true });
  window.addEventListener('keydown', startVideo, { once: true });
});

