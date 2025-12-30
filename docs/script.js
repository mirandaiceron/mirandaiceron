const header = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('is-solid');
  } else {
    header.classList.remove('is-solid');
  }
});

const heroText = document.querySelector('.hero-text');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (heroText) {
    heroText.style.transform = `translateY(${scrollY * 0.15}px)`;
    heroText.style.opacity = `${1 - scrollY / 400}`;
  }
});
const video = document.querySelector('.hero-video');

if (video) {
  video.muted = true;
  video.play().catch(() => {
    // autoplay was blocked — browser fallback
  });
}

