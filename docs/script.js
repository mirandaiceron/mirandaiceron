document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top-nav');
  const heroText = document.querySelector('.hero-text');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header background
    if (header) {
      scrollY > 80
        ? header.classList.add('is-solid')
        : header.classList.remove('is-solid');
    }

    // Hero text animation
    if (heroText) {
      heroText.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroText.style.opacity = `${1 - scrollY / 450}`;
    }
  });
});

