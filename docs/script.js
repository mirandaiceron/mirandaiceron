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
const filmStrips = document.querySelectorAll('.film-stills');

filmStrips.forEach(strip => {
  if (strip.scrollWidth <= strip.clientWidth) return;

  let raf;

  const drift = () => {
    strip.scrollLeft += 0.6;

    // when we reach the end, reset to the start
    if (strip.scrollLeft >= strip.scrollWidth - strip.clientWidth) {
      strip.scrollLeft = 0;
    }

    raf = requestAnimationFrame(drift);
  };

  drift();
});



