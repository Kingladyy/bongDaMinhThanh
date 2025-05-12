let lastScroll = 0;
const navBar = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScroll && currentScroll > 60) {
    // Kéo xuống
    navBar.classList.add('hide');
  } else {
    // Kéo lên
    navBar.classList.remove('hide');
  }
  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});