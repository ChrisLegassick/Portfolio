const navToggle = document.querySelector('.nav-toggle');
const navOverlay = document.querySelector('.nav-overlay');
const navItem = document.querySelectorAll('.nav-item');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navOverlay.classList.toggle('nav-overlay-hide');
  document.body.classList.toggle('noscroll-overlay');
});

navItem.forEach(item =>
  item.addEventListener('click', () => {
    navOverlay.classList.add('nav-overlay-hide');
    navToggle.classList.toggle('active');
    document.body.classList.toggle('noscroll-overlay');
  })
);
