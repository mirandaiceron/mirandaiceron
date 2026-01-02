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
     SCROLL REVEAL (STAGGERED)
  ========================= */
  const revealItems = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = [...revealItems].indexOf(entry.target);
        const delay = index * 180;

        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealItems.forEach(item => revealObserver.observe(item));

});

