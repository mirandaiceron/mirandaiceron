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

const images = document.querySelectorAll('.contact-sheet img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.caption || '';
    lightbox.classList.add('is-open');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('is-open');
  }
});




