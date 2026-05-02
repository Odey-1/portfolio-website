// nav toggle logic

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});