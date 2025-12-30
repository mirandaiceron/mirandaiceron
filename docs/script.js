document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');
  const video = document.querySelector('.hero-video');

  // ---------- SCROLL EFFECTS ----------
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

  // ---------- SAFARI AUTOPLAY FIX ----------
  if (!video) return;

  video.muted = true;
  video.setAttribute('muted', '');
  video.playsInline = true;

  const attemptPlay = () => {
    video.play().catch(() => {});
    window.removeEventListener('scroll', attemptPlay);
    window.removeEventListener('mousemove', attemptPlay);
    window.removeEventListener('touchstart', attemptPlay);
  };

  // Try immediately
  attemptPlay();

  // Safari desktop fallback: first interaction
  window.addEventListener('scroll', attemptPlay, { once: true });
  window.addEventListener('mousemove', attemptPlay, { once: true });
  window.addEventListener('touchstart', attemptPlay, { once: true });
});

