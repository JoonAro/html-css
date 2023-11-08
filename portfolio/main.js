const toTop = document.querySelector('#backToTop');
const mobileButton = document.querySelector('.mobile');
const navList = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li a');
window.onscroll = () => { showToTop() };
function showToTop() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
const toTopFunc = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const mobileMenu = () => {
  for (const link of links) {
    link.addEventListener('click', mobileMenu)
  }
  if (navList.classList.contains('responsive')) {
    navList.classList.remove('responsive');
  } else {
    navList.classList.add('responsive');
  }
}
toTop.addEventListener('click', toTopFunc);
mobileButton.addEventListener('click', mobileMenu);