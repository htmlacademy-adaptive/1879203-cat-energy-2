const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

// eslint-disable-next-line prefer-arrow-callback
// navToggle.addEventListener('click', function () {
//   nav.classList.toggle('navigation--active');
//   navToggle.classList.toggle('active');
// });

function getWindowWidth() {
  return window.innerWidth;
};

// при ширине экрана больше 768 автоматически удаляю класс active;
function removeActiveClass() {
  if (getWindowWidth() > 768) {
    nav.classList.remove('navigation--active');
    navToggle.classList.remove('active');
  }
};

removeActiveClass();

// eslint-disable-next-line prefer-arrow-callback
navToggle.addEventListener('click', function () {
  nav.classList.toggle('navigation--active');
  navToggle.classList.toggle('active');
});


