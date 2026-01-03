document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     HEADER / HERO
  ========================= */
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

    if (header) {
      header.classList.toggle('is-solid', scrollY > 80);
    }

    if (heroText) {
      heroText.style.opacity = Math.max(1 - scrollY / 400, 0);
      heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
    }

    startVideo();
  });

  window.addEventListener('click', startVideo, { once: true });

});

/* =========================
   ABOUT — SCROLL REVEAL
========================= */
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach(item => revealObserver.observe(item));

