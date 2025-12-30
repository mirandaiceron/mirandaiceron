document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    /* HEADER: turn black after scroll */
    if (scrollY > 80) {
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }

    /* HERO TEXT: fade + move */
    if (heroText) {
      heroText.style.opacity = Math.max(1 - scrollY / 400, 0);
      heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
    }
  });
});

