document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     HEADER / HERO (unchanged)
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
     LIGHTBOX (unchanged)
  ========================= */
  const images = Array.from(document.querySelectorAll('.contact-sheet img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const prevBtn = document.querySelector('.lightbox-arrow.left');
  const nextBtn = document.querySelector('.lightbox-arrow.right');

  let currentIndex = 0;

  const openLightbox = (index) => {
    const img = images[index];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.caption || '';
    lightbox.classList.add('is-open');
    currentIndex = index;
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
  };

  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNext();
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrev();
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;

    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') lightbox.classList.remove('is-open');
  });

  /* =========================
     FILM STRIP AUTO-SCROLL
  ========================= */
  const filmRows = document.querySelectorAll('.film-row');

filmRows.forEach(row => {
  const strip = row.querySelector('.film-stills');
  if (!strip) return;

  let isHovering = false;

  const drift = () => {
    if (!isHovering) return;
    strip.scrollLeft += 0.35; // subtle speed
    requestAnimationFrame(drift);
  };

  row.addEventListener('mouseenter', () => {
    // only drift if scrolling is possible
    if (strip.scrollWidth <= strip.clientWidth) return;
    isHovering = true;
    drift();
  });

  row.addEventListener('mouseleave', () => {
    isHovering = false;
  });
});


