document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     HEADER
  ========================= */
  const header = document.querySelector('.top-nav');

  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('is-solid', window.scrollY > 80);
    }
  });

  /* =========================
     IMAGE REVEAL (LOGO → PORTRAIT)
  ========================= */
  const logo = document.querySelector('.about-img.logo');
  const portrait = document.querySelector('.about-img.portrait');

  if (logo && portrait) {
    setTimeout(() => {
      logo.classList.remove('is-visible');
      portrait.classList.add('is-visible');
    }, 1400);
  }

  /* =========================
     TEXT REVEAL
  ========================= */
  const text = document.querySelector('.about-text');

  if (text) {
    setTimeout(() => {
      text.classList.add('is-visible');
    }, 2200);
  }

});


