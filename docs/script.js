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

  /* =========================
     FILM STRIP AUTO-DRIFT
  ========================= */
  document.querySelectorAll('.film-row').forEach(row => {
    const strip = row.querySelector('.film-stills');
    if (!strip) return;

    let rafId;
    let hovering = false;

    const drift = () => {
      if (!hovering) return;

      strip.scrollLeft += 0.6; // slightly faster so you SEE it

      if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth) {
        strip.scrollLeft = 0;
      }

      rafId = requestAnimationFrame(drift);
    };

    row.addEventListener('mouseenter', () => {
      hovering = true;
      requestAnimationFrame(drift);
    });

    row.addEventListener('mouseleave', () => {
      hovering = false;
      cancelAnimationFrame(rafId);
    });
  });

});

