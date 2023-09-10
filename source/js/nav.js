let navMain = document.querySelector('.navigation-list');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.add('navigation-list--js');
navToggle.classList.add('navigation__toggle--js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation-list--open')) {
    navMain.classList.remove('navigation-list--open');
    navToggle.classList.remove('navigation__toggle--open');
  } else {
    navMain.classList.add('navigation-list--open');
    navToggle.classList.add('navigation__toggle--open');
  }
});
