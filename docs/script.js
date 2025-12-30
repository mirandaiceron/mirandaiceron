document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');
  const video = document.querySelector('.hero-video');

  /* =========================
     SCROLL EFFECTS
  ========================= */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header fade to solid
    if (header) {
      if (scrollY > 80) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    }

    // Hero text animation
    if (heroText) {
      heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroText.style.opacity = `${1 - scrollY / 450}`;
    }
  });

  /* =========================
     VIDEO AUTOPLAY (SAFARI SAFE)
  ========================= */
  if (!video) return;

  video.muted = true;
  video.setAttribute('muted', '');
  video.playsInline = true;

  let hasPlayed = false;

  const playVideo = () => {
    if (hasPlayed) return;

    video.play()
      .then(() => {
        hasPlayed = true;
      })
      .catch(() => {
        // Safari may still block until gesture
      });
  };

  // Try immediately (works on Chrome / Firefox / iOS Safari)
  playVideo();

  // Safari desktop fallback:


