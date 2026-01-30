document.addEventListener('DOMContentLoaded', () => {

/* =========================
   HEADER / HERO (HOME ONLY)
========================= */
const header = document.querySelector('.top-nav');
const video = document.querySelector('.home .hero-video');

let videoStarted = false;

const startVideo = () => {
  if (!videoStarted && video) {
    video.play().catch(() => {});
    videoStarted = true;
  }
};

window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('is-solid', window.scrollY > 80);
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
   (PROJECT PAGES ONLY)
========================= */
const contactSheet = document.querySelector('.contact-sheet');

if (contactSheet) {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.getElementById('photo-lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const nextBtn = document.querySelector('.lightbox-arrow.right');
  const prevBtn = document.querySelector('.lightbox-arrow.left');

  const images = Array.from(contactSheet.querySelectorAll('img'));
  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    updateLightbox();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt || '';
  }

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  });

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
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


