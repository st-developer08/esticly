import './style.css'
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

const links = document.querySelectorAll('.header__link');
links.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});