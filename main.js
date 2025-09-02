const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
  navMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});
