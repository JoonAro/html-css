const toTop = document.querySelector('#backToTop');
window.onscroll = () => {showToTop()};
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




toTop.addEventListener('click', toTopFunc)