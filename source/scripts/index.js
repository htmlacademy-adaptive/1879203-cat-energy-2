const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

// eslint-disable-next-line prefer-arrow-callback
navToggle.addEventListener('click', function () {
  nav.classList.toggle('navigation--active');
  navToggle.classList.toggle('active');
});
