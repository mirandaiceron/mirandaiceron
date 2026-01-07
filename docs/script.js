document.addEventListener('DOMContentLoaded', () => {

  /* =========================
   HEADER / HERO (HOME ONLY)
========================= */
const header = document.querySelector('.top-nav');
const heroText = document.querySelector('.home .hero-text');
const video = document.querySelector('.home .hero-video');

let videoStarted = false;
let hasScrolled = false;

// Force visible on load
if (heroText) {
  heroText.style.opacity = 1;
  heroText.style.transform = 'translateY(0)';
}

const startVideo = () => {
  if (!videoStarted && video) {
    video.play().catch(() => {});
    videoStarted = true;
  }
};

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (!hasScrolled) {
    hasScrolled = true;
    return;
  }

  if (header) {
    header.classList.toggle('is-solid', scrollY > 80);
  }

  if (heroText) {
    heroText.style.opacity = Math.max(1 - scrollY / 600, 0.2);
    heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
  }

  startVideo();
});

window.addEventListener('click', startVideo, { once: true });


  /* =========================
     FILM PAGE — HOVER AUTO-DRIFT
  ========================= */
  document.querySelectorAll('.film-row').forEach(row => {
    const strip = row.querySelector('.film-stills');
    if (!strip) return;

    let rafId;
    let hovering = false;

    const drift = () => {
      if (!hovering) return;

      strip.scrollLeft += 1;

      if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth) {
        strip.scrollLeft = 0;
      }

      rafId = requestAnimationFrame(drift);
    };

    row.addEventListener('mouseenter', () => {
      hovering = true;
      rafId = requestAnimationFrame(drift);
    });

    row.addEventListener('mouseleave', () => {
      hovering = false;
      cancelAnimationFrame(rafId);
    });
  });

  /* =========================
     PHOTOGRAPHY — LIGHTBOX
  ========================= */
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  const lightboxCaption = document.querySelector('.lightbox .caption');

  document.querySelectorAll('.photo-grid img').forEach(img => {
    img.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;

      lightbox.classList.add('is-visible');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;

      if (lightboxCaption) {
        lightboxCaption.textContent = img.dataset.caption || '';
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('is-visible');
    });
  }

  /* =========================
     ABOUT — SCROLL REVEAL
  ========================= */
  const revealItems = document.querySelectorAll('.reveal');

  if (revealItems.length) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });

    revealItems.forEach(item => revealObserver.observe(item));
  }

});


