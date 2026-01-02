
alert('script loaded');

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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const strip = entry.target;
    let driftId;

    const drift = () => {
      strip.scrollLeft += 0.3;
      driftId = requestAnimationFrame(drift);
    };

    drift();

    observer.unobserve(strip);
  });
}, { threshold: 0.5 });

filmStrips.forEach(strip => {
  if (strip.scrollWidth > strip.clientWidth) {
    observer.observe(strip);
  }
});



