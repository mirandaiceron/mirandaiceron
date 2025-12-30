document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');
  const video = document.querySelector('.hero-video');

  /* =========================
     SCROLL EFFECTS
  ========================= */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header fade
    if (header) {
      scrollY > 80
        ? header.classList.add('is-solid')
        : header.classList.remove('is-solid');
    }

    // Hero text animation
    if (heroText) {
      heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroText.style.opacity = `${1 - scrollY / 450}`;
    }
  });

  /* =========================
     VIDEO STARTS ON FIRST SCROLL
  ========================= */
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

  // FIRST SCROLL = PLAY
  window.addEventListener('scroll', startVideo, { once: true });
});

