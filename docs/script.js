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
    if (scrollY > 80) header.classList.add('is-solid');
    else header.classList.remove('is-solid');
  }

  if (heroText) {
    heroText.style.opacity = Math.max(1 - scrollY / 400, 0);
    heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
  }

  startVideo();
});

window.addEventListener('click', startVideo, { once: true });

/* =========================
   FILM STRIP AUTO-DRIFT
========================= */
const filmRows = document.querySelectorAll('.film-row');

filmRows.forEach(row => {
  const strip = row.querySelector('.film-stills');
  if (!strip) return;

  let isHovering = false;

  const drift = () => {
    if (!isHovering) return;
    strip.scrollLeft += 0.4; // subtle, visible
    requestAnimationFrame(drift);
  };

  row.addEventListener('mouseenter', () => {
    if (strip.scrollWidth <= strip.clientWidth) return;
    isHovering = true;
    drift();
  });

  row.addEventListener('mouseleave', () => {
    isHovering = false;
  });
});


